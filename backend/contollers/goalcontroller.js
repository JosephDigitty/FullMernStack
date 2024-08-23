


const getGoals = (req, res) => {
    res.status(200).json({message:"get goals"});
}

const SetGoals = (req, res) => {
    res.status(201).json({message:"set goals"});
}

const UpdateGoals = (req, res) => {
    res.status(200).json({message:`Update goals${req.params.id}`});
}

const deleteGoals = (req, res) => {
    res.status(200).json({message:`Delete goals${req.params.id}`});
}


module.exports = {
    getGoals,
    SetGoals,
    UpdateGoals,
    deleteGoals,
 };
