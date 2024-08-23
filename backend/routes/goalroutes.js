const express = require('express');
const router = express.Router();
const { getGoals, SetGoals, UpdateGoals, deleteGoals } = require('../contollers/goalcontroller');

router.get('/',  getGoals)

router.post('/',  SetGoals)

router.put('/:id',  UpdateGoals)

router.delete('/:id',  deleteGoals)

module.exports = router 