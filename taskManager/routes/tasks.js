const express = require('express');
const {
    getAllTasks,
    postTasks,
    getSingleTask,
    editTask,
    deleteTask
} = require('../controllers/taskController');

const router = express.Router();

router.route('/').get(getAllTasks).post(postTasks);
router.route('/:id').get(getSingleTask).patch(editTask).delete(deleteTask);


module.exports = router;