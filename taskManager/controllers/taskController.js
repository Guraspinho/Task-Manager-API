const Task = require('../models/taskSchema');
const asyncWrapper = require('../middlewares/asyncWrapper');
const {createCustomError} = require('../errors/customErrors');


const getAllTasks = asyncWrapper(  async (req,res) =>
{
        const tasks = await Task.find({});
        res.status(200).json({tasks});    
});

const postTasks = asyncWrapper( async (req,res) =>
{
        const task = await Task.create(req.body);
        res.status(201).json({task});
});


const getSingleTask = asyncWrapper( async (req,res,next) =>
{
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id: taskID});
        
        if(!task)
        {
            return next(createCustomError(`No task with id ${taskID}`,404));
        }
        res.status(200).json({task});   
});


const deleteTask = asyncWrapper( async (req,res, next) =>
{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id: taskID});
        
        if(!task)
        {
            return next(createCustomError(`No task with id ${taskID}`,404));
        }
        res.status(200).json({task});
});


const editTask = asyncWrapper( async (req,res, next) =>
{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate( {_id: taskID}, req.body,
            {
                new: true,
                runValidators: true
            } )

        if(!task)
        {
            return next(createCustomError(`No task with id ${taskID}`,404));
        }
        res.status(200).json({task})
});


module.exports =
{
    getAllTasks,
    postTasks,
    getSingleTask,
    deleteTask,
    editTask
}
