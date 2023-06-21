const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AthleteSchema = new Schema({
    firstName: {
        type: String, 
        required: true, 
        maxLength: 10
    }, 

    lastName: {
        type: String, 
        required: true, 
        maxLength: 10
    }, 

    gender: {
        type: String, 
        required: true, 
        enum: [
            'Male',
            'Female',
            'male', 
            'female'
        ]
    },

    age: {
        type: Number, 
        required: true 
    }, 

    grade: {
        type: String, 
        required: true
    }, 
    
    sport: {
        type: String,
    }, 

    number: {
        type: Number
    },

    primaryPosition: {
        type: String, 
        required: true
    }, 

    secondaryPosition: {
        type: String
    },

    state: {
        type: String, 
        required: true
    }, 
    
    school: {
        type: String, 
        required: true
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Athlete', AthleteSchema)