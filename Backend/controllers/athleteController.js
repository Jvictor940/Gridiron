const Athlete = require('../models/Athlete')

// Root Methods 
// For '/athlete' endpoints
const getAthletes = async (req, res, next) => {
    // query parameter 
    if (Object.keys(req.query).length) {
        const {
            firstName,
            lastName,
            gender, 
            age, 
            grade, 
            sport, 
            number,
            position,
            state, 
            school, 
            rank
        } = req.query 
        const filter = [];

        if (firstName) filter.push(firstName)
        if (lastName) filter.push(lastName)
        if (gender) filter.push(gender)
        if (age) filter.push(age)
        if (grade) filter.push(grade)
        if (sport) filter.push(sport)
        if (number) filter.push(number)
        if (position) filter.push(position)
        if (state) filter.push(state)
        if (school) filter.push(school)
        if (rank) filter.push(rank)

        for (const query of filter) {
            console.log(`Searching Athlete by ${query}`)
        }
    }

    try {
        const athletes = await Athlete.find()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(athletes)
    } catch (err) {
        next(err)
    }
}

const createAthlete = async (req, res, next) => {
    try {
        const athlete = await Athlete.create(req.body)
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(athlete) 
    } catch (err) {
        next(err)
    }

}

const deleteAthletes = async (req, res, next) => {
    try {
        const athlete = await Athlete.deleteMany()
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(athlete)
    } catch (err) {
        next(err)
    }

}

//Param Methods 
// For '/athlete/:athleteId'
const getAthlete = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json' )
    .json({ message: `Show me the athlete with the Athlete Id of ${req.params.athleteId}`})
}

const putAthlete = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Updated the profile of ${req.body.athleteName} with Id of ${req.params.athleteId}`})
}

const deleteAthlete = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Deleted the athlete ${req.body.athleteName} with the Id of ${req.params.athleteId} `})
}

module.exports = {
    getAthletes,
    createAthlete, 
    deleteAthletes,
    getAthlete,
    putAthlete,
    deleteAthlete
    
}