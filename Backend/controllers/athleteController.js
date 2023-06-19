// For '/athlete' endpoints

const getAthletes = (req, res, next) => {
    // query parameter 
    if (Object.keys(req.query).length) {
        const {
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

    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Got All Athletes!'})
}

const createAthlete = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Created an athlete by the name of ${req.body.athleteName}!`})
}

const deleteAthletes = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Deleted All Athletes!'})
}

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