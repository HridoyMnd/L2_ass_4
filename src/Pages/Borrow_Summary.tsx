
const Borrow_Summary = () => {


  // Borrow summary fake data
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
    <div className="overflow-x-auto w-10/12 mx-auto my-5">
      <table className="min-w-full text-sm text-left bg-white border rounded shadow-md">
        {/* table header */}
        <thead className="bg-gray-100 text-gray-700 uppercase">
          <tr>
            <th className="px-4 py-3 border-r text-center">Book title</th>
            <th className="px-4 py-3 border-r text-center">ISBN</th>
            <th className="px-4 py-3 border-r text-center">Total Quantity</th>
          </tr>
        </thead>
        {/* table body */}
        <tbody>
          {all_books.map((book, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2 text-center border-r">{book.title}</td>
              <td className="px-4 py-2 text-center border-r">{book.isbn}</td>
              <td className="px-4 py-2 text-center border-r">{book.copies}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Borrow_Summary;