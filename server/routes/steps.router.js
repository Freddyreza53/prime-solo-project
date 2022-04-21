const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get(`/topScores/:difficulty`, rejectUnauthenticated, (req, res) => {
  // GET route code here
  let difficulty = req.params.difficulty;

  let queryText = `
    SELECT "steps".id, "user".username, "steps".step_amount FROM "steps"
    JOIN "user" ON "user".id = "steps".user_id
    WHERE "steps".difficulty = $1
    ORDER BY "steps".step_amount DESC;
  `;

  let values = [difficulty];

      pool.query(queryText, values)
      .then(result => {
          res.send(result.rows)
      }).catch(err => { 
      res.sendStatus(500);
      // For testing only, can be removed
      });
    
});

router.get(`/myScores/:difficulty`, rejectUnauthenticated, (req, res) => {
  // GET route code here
  let difficulty = req.params.difficulty;

  let queryText = `
    SELECT * FROM "steps"
    WHERE "user_id" = $1 AND "difficulty" = $2
    ORDER BY "steps".step_amount DESC;
  `;

  let values = [req.user.id, difficulty];

      pool.query(queryText, values)
      .then(result => {
          res.send(result.rows)
      }).catch(err => { 
      res.sendStatus(500);
      // For testing only, can be removed
      });
  
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

router.put('/', rejectUnauthenticated,(req, res) => {
  // POST route code here
    console.log('req.body is:', req.body);

    let queryText = `
      UPDATE "user"
      SET "daily_goal" = $1, "easy_goal" = $2, "medium_goal" = $3, "hard_goal" = $4
      WHERE "id" = $5;
    `;

    let values = [req.body.daily_goal, req.body.easy_goal, req.body.medium_goal, req.body.hard_goal, req.user.id]

    pool.query(queryText, values)
        .then(result => {
        res.sendStatus(201)
        
        }).catch(err => { 
        res.sendStatus(500);
        // For testing only, can be removed
        });
});

router.delete('/:id', rejectUnauthenticated,(req, res) => {
  // POST route code here
    console.log('req.body.id is:', req.body.id);

    let queryText = `
      DELETE FROM "steps"
      WHERE "id" = $1 AND "user_id" = $2;
    `;

    let values = [req.params.id, req.user.id]

    pool.query(queryText, values)
        .then(result => {
        res.sendStatus(201)
        
        }).catch(err => { 
        res.sendStatus(500);
        // For testing only, can be removed
        });
});

module.exports = router;
