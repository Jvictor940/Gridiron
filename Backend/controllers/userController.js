// Root Methods 
// For '/user' endpoints

const getUsers = (req, res, next) => {
    // query parameter 
    if (Object.keys(req.query).length) {
        // Able to search through College staff by gender, name, which college they're representing, which sport if they're a coach, and which position they hold. 
        const {
            gender, 
            userName, 
            college,
            sport,
            title 
        } = req.query 
        const filter = [];

        if (gender) filter.push(gender)
        if (userName) filter.push(userName)
        if (sport) filter.push(sport)
        if (college) filter.push(college)
        if (title) filter.push(title)

        for (const query of filter) {
            console.log(`Searching Athlete by ${query}`)
        }
    }

    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Got All Users!'})
}

const createUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Created a user by the name of ${req.body.userName}!`})
}

const deleteUsers = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Deleted All Users!'})
}

//Param Methods 
// For '/athlete/:athleteId'
const getUser = (req, res, next) => {
    res 
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Got user by the Id of ${req.params.userId}`})
}

const putUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Updated the profile of ${req.body.userName} with Id of ${req.params.userId}`})
}

const deleteUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Deleted the user ${req.body.userName} with the Id of ${req.params.userId} `})
}

module.exports = {
    getUsers,
    createUser, 
    deleteUsers,
    getUser,
    putUser,
    deleteUser
}