
import mongoose from 'mongoose';


const schema = mongoose.Schema;


export const footballplayersSchema = new schema({


    name: {
        type: String,


        required: 'Please enter a name.'
    },

    goals: {
        type: Number,
    },

    passes: {
        type: Number,
    },

    fouls: {
        type: Number,
    },

    headers: {
        type: Number,
    },


});