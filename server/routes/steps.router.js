const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated,(req, res) => {
  // POST route code here
    console.log('req.body is:', req.body);

    let queryText = `
        INSERT INTO "steps" ("step_amount", "difficulty", "user_id")
        VALUES ($1, $2, $3);
    `;

    let values = [req.body.stepScore, req.body.mode, req.user.id]

    pool.query(queryText, values)
        .then(result => {
        res.sendStatus(201)
        
        }).catch(err => { 
        res.sendStatus(500);
        // For testing only, can be removed
        });
});

module.exports = router;
