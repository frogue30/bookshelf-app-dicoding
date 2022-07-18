const {
  addBooksHandler,
  getAllBooksHandler,
  getBooksByIdHandler,
  editBooksByIdHandler,
  deleteBooksByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
    options: {
        cors: {
          origin: ['*'],
        },
    },
  },

  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
    options: {
        cors: {
          origin: ['*'],
        },
    },
  },

  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBooksByIdHandler,
    options: {
        cors: {
          origin: ['*'],
        },
    },
  },

  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBooksByIdHandler,
    options: {
        cors: {
          origin: ['*'],
        },
    },
  },

  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBooksByIdHandler,
    options: {
        cors: {
          origin: ['*'],
        },
    },
  },

];

module.exports = routes;
