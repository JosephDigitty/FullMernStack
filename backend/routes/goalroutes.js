const express = require('express');
const router = express.Router();
const { getGoals, SetGoals, UpdateGoals, deleteGoals } = require('../contollers/goalcontroller');

router.route('/').get(getGoals).post(SetGoals)

router.route('/:id').put(UpdateGoals).delete(deleteGoals)



module.exports = router 