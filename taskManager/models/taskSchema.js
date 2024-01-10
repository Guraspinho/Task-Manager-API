const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema(
    {
        name: 
        {
            type: String,
            required: [true,'Please provide name'],
            trim: true,
            maxlength: [20,'Name can not have more than 20 characters']
        },
        completed: 
        {
            type: Boolean,
            default: false
        }
    }
)

module.exports = mongoose.model('Task', taskSchema);