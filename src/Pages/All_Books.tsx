import React from 'react';

const All_Books = () => {

const books = [
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Adventure',
    isbn: '9780061122415',
    copies: 5,
    available: true,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-Help',
    isbn: '9780735211292',
    copies: 3,
    available: false,
  },
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    genre: 'Fantasy',
    isbn: '9780747532743',
    copies: 10,
    available: true,
  },
];

    return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left bg-white border rounded shadow-md">
        <thead className="bg-gray-100 text-gray-700 uppercase">
          <tr>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Author</th>
            <th className="px-4 py-3">Genre</th>
            <th className="px-4 py-3">ISBN</th>
            <th className="px-4 py-3">Copies</th>
            <th className="px-4 py-3">Availability</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{book.title}</td>
              <td className="px-4 py-2">{book.author}</td>
              <td className="px-4 py-2">{book.genre}</td>
              <td className="px-4 py-2">{book.isbn}</td>
              <td className="px-4 py-2">{book.copies}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    book.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}
                >
                  {book.available ? 'Available' : 'Unavailable'}
                </span>
              </td>

              {/* actions */}
              <td className="px-4 py-2 space-x-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-xs">
                  Edit
                </button>

                <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-red-600 text-xs">
                  Borrow
                </button>
                                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-xs">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default All_Books;