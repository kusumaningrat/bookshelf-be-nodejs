const Url = {
    Api: {
        Category: '/category',
        Book: '/book',
        Root: '/api/v1',
    }
}
const Error = {
    CategoryEmpty: 'Category is empty',
    CategoryNotFound: 'Category not found',
    BookEmpty: 'Book is empty',
    BookNotFound: 'Book not found',
    SomethingWentWrong: 'Something Went Wrong',
    CategoryCannotBeNull: 'Category name cannot be null',
    BookCannotBeNull: 'Book name cannot be null',
    CategoryAlreadyExist: 'Category already exist',
    BookAlreadyExist: 'Book already exist',
}

const Message = {
    'Added': 'Your data has been added',
    'Updated': 'Your data has been updated',
    'Deleted': 'Your data has been deleted',
    'Loaded': 'Your data has been loaded',
    'Logedin': 'Successfully logged in',
    'InternalServerError': 'Internal server error',
    'WrongPassword': 'Wrong password',
    'Unauthorized': 'Forbidden Access',
    'Forbidden': 'Authorization Denied',
    'Conflict': 'Data Already Exists',
    'InvalidToken': 'Invalid Token',
    'NotFound': 'Data Not Found',
    'InvalidData': 'Read Page cannot be more than Page Count',
}

const StatusCode = {
    OK: { "code": 200, "value": "OK" },
    InternalServerError: { "code": 500, "value": "InternalServerError" },
    NotFound: { "code": 404, "value": "NotFound" },
    BadRequest: { "code": 400, "value": "BadRequest" },
    Unauthorized: { "code": 403, "value": "Unauthorized" },
    Forbidden: { "code": 401, "value": "Forbidden" },
    Conflict: { "code": 409, "value": "Conflict" },
}


module.exports = {
    Url,
    Error,
    Message,
    StatusCode
}