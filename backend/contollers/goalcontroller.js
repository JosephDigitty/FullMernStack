const asyncHandler = require('express-async-handler');
const getGoals = async (req, res) => {
    res.status(200).json({message:"get goals"});
}


const SetGoals = asyncHandler( async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error ("please add a text field")
    }

    res.status(201).json({message:"set goals"});
})


//private routes
const UpdateGoals = asyncHandler( async (req, res) => {
    res.status(200).json({message:`Update goals${req.params.id}`});
})


//private routes
const deleteGoals = asyncHandler( async (req, res) => {
    res.status(200).json({message:`Delete goals${req.params.id}`});
})


module.exports = {
    getGoals,
    SetGoals,
    UpdateGoals,
    deleteGoals,
 };
