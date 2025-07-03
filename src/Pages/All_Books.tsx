import { Link } from "react-router-dom";

// Books fake Data
const All_Books = () => {
  const all_books = [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Adventure",
      isbn: "9780061122415",
      copies: 5,
      available: true,
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self-Help",
      isbn: "9780735211292",
      copies: 3,
      available: false,
    },
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      genre: "Fantasy",
      isbn: "9780747532743",
      copies: 10,
      available: true,
    },
  ];

  return (
    <div className="overflow-x-auto my-6">
      <table className="w-[98%] mx-auto text-sm text-left bg-white border rounded shadow-md ">
        <thead className="bg-gray-100 text-gray-700 uppercase">
          {/* table header */}
          <tr>
            <th className="px-4 py-3 border-r text-center">Title</th>
            <th className="px-4 py-3 border-r text-center">Author</th>
            <th className="px-4 py-3 border-r text-center">Genre</th>
            <th className="px-4 py-3 border-r text-center">ISBN</th>
            <th className="px-4 py-3 border-r text-center">Copies</th>
            <th className="px-4 py-3 border-r text-center">Availability</th>
            <th className="px-4 py-3 border-r text-center">Actions</th>
          </tr>
        </thead>
        {/* table body */}
        <tbody>
          {all_books.map((book, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2 border-r text-center">{book.title}</td>
              <td className="px-4 py-2 border-r text-center">{book.author}</td>
              <td className="px-4 py-2 border-r text-center">{book.genre}</td>
              <td className="px-4 py-2 border-r text-center">{book.isbn}</td>
              <td className="px-4 py-2 border-r text-center">{book.copies}</td>
              <td className="px-4 py-2 border-r text-center">
                <span
                  className={`w-28 block mx-auto py-1 rounded text-sm font-medium ${
                    book.available
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {book.available ? "Available" : "Unavailable"}
                </span>
              </td>

              {/* actions buttos */}
              <td className="py-2">
                <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                  {/* Book Edit Button */}
                  <Link
                    to="/book_update"
                    className="bg-blue-200 font-medium text-blue-700 w-24 text-center py-1 rounded hover:bg-blue-400 hover:text-white duration-300 text-sm"
                  >
                    Edit
                  </Link>

                  {/* Book Borrow Button */}
                  <Link
                    to="/borrow_book"
                    className="bg-green-200 font-medium text-green-700 w-24 text-center py-1 rounded hover:bg-green-400 hover:text-white duration-300 text-sm"
                  >
                    Borrow
                  </Link>

                  {/* Book Delete Button */}
                  <button className="bg-red-200 font-medium text-red-700 w-24 py-1 rounded hover:bg-red-400 hover:text-white duration-300 text-sm">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default All_Books;
