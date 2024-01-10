
class customError extends Error
{
    constructor(message,statusCode)
    {
        super(message);
        this.statusCode = statusCode;
    }
}

const createCustomError = (msg,statusCode) =>
{
    return new customError(msg,statusCode);
}

module.exports = 
{
    customError,
    createCustomError
}
