//this is middleware error handler for 404 errors:
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

// This code sets up an error-handling middleware function in an Express.js application. The middleware function will be called whenever there is an error thrown in any of the routes defined in the application. 
// for full understanding try chatgpt: i am new to backend development...Can you explain the following code:
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

export {notFound, errorHandler}