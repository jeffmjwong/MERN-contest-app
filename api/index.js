import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';

const router = express.Router();

let mdb;
MongoClient.connect(config.mongodbUri, (error, client) => {
  assert.equal(null, error);

  const db = client.db(config.database);
  mdb = db;
});

router.get('/contests', (request, response) => {
  let contests = {};
  mdb.collection('contests')
    .find({})
    .project({
      id: 1,
      categoryName: 1,
      contestName: 1
    })
    .each((error, contest) => {
      assert.equal(null, error);

      if (!contest) { // no more contests
        response.send({ contests });
        return;
      }
      contests[contest.id] = contest;
    });
});

router.get('/contests/:contestId', (request, response) => {
  mdb.collection('contests')
    .findOne({ id: Number(request.params.contestId) })
    .then(contest => response.send(contest))
    .catch(console.error);
});

export default router;
