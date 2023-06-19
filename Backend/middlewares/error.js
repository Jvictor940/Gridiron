const errorHandler = (err, req, res, next) => {
    // Stack Trace to keep track of exactly where our errors are for efficient debugging
    console.log(err.stack)

    res
    .status(error.statusCode || 500)
    .setHeader('Content-Type', 'application/json')
    .json({ message: err.message || 'Server Error' }) 
}
module.exports = errorHandler;