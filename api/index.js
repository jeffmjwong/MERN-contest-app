import express from 'express';
import data from '../src/testData';

const router = express.Router();

const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});

router.get('/contests', (request, response) => {
  response.send({
    contests: contests
  });
});

router.get('/contests/:contestId', (request, response) => {
  let contest = contests[request.params.contestId];
  contest.description = 'lorem ipsum lol kwkwkwk llloooooo';
  response.send(contest);
});

export default router;
