import { Link } from "react-router-dom";
import { useDeleteBookMutation, useGetBooksQuery } from "../Redux/Api/baseapi";
import Swal from "sweetalert2";

// Books fake Data
const All_Books = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  const [deleteBook] = useDeleteBookMutation();

  //handle book delete
  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBook(id).unwrap();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  if (isLoading) {
    return <p>Loading....</p>;
  }

  // book type declear
  type Book = {
    _id: string;
    title: string;
    author: string;
    genre: string;
    isbn: string;
    copies: number;
    available: boolean;
  };

  return (
    <div className="overflow-x-auto my-6">
      <table className="w-[98%] mx-auto text-sm text-left bg-white border rounded shadow-md ">
        <thead className="bg-gray-100 text-gray-700 uppercase">
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

        <tbody>
          {data.data.map((book: Book, index: number) => (
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

              <td className="py-2">
                <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                  <Link
                    to="/book_update"
                    className="bg-blue-200 font-medium text-blue-700 w-24 text-center py-1 rounded hover:bg-blue-400 hover:text-white duration-300 text-sm"
                  >
                    Edit
                  </Link>

                  <Link
                    to="/borrow_book"
                    className="bg-green-200 font-medium text-green-700 w-24 text-center py-1 rounded hover:bg-green-400 hover:text-white duration-300 text-sm"
                  >
                    Borrow
                  </Link>

                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-red-200 font-medium text-red-700 w-24 py-1 rounded hover:bg-red-400 hover:text-white duration-300 text-sm"
                  >
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
