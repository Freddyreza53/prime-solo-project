const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

require('dotenv').config();

const { google } = require("googleapis");
const request = require("request");
const urlParse = require("url-parse");
const queryParse = require("query-string");
const axios = require("axios");

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
    const oauth2Client = new google.auth.OAuth2(
        // Client ID
        process.env.GOOGLE_CLIENT_ID,
        // Client Secret
        process.env.GOOGLE_CLIENT_SECRET,
        // link to redirect to
        "http://localhost:5000/getSteps/steps"
    );

    const scopes = [ "https://www.googleapis.com/auth/fitness.activity.read profile email openid"];

    const url = oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: scopes,
        state: JSON.stringify({
            callbackUrl: req.body.callbackUrl,
            userID: req.body.userid
        })
    });

    request(url, (err, response, body) => {
        console.log('error: ', err);
        console.log('statusCode: ', response && response.statusCode);
        res.send({url });
    })
});

router.get("/steps", async (req, res) => {
    const queryURL = new urlParse(req.url);
    const code = queryParse.parse(queryURL.query).code;
    const oauth2Client = new google.auth.OAuth2(
        // Client ID
        process.env.GOOGLE_CLIENT_ID,
        // Client Secret
        process.env.GOOGLE_CLIENT_SECRET,
        // link to redirect to
        "http://localhost:5000/getSteps/steps"

    );

    const tokens = await oauth2Client.getToken(code);

    console.log(tokens);
    res.send('Hello')

    let stepArray = [];
    try{
        const result = await axios({
            method: "POST",
            headers: {
                authorization: "Bearer " + tokens.tokens.access_token
            }, 
            "Content-Type": "application/json",
            url: `https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate`,
            data: {
                aggregateBy: [
                    {
                        dataTypeName: "com.google.step_count.delta",
                        dataSourceId: "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
                    }
                ],
                bucketByTime: {durationMillis: 86400000},
                startTimeMillis: 1650040036681,
                endTimeMillis: 1650064200426,
            }
        });
        // console.log(result);
        stepArray = result.data.bucket;
        
    } catch (err) {
        console.log(err);
        
    }
    try {
        for (const dataSet of stepArray) {
            for (const points of dataSet.dataset) {
                for(const steps of points.point) {
                    console.log(steps.value);
                    
                }
            }
        }
    } catch (err) {
        console.log(err);
        
    }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
