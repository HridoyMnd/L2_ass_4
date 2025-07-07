import Loader from "../components/Loader";
import { useGetBorrowBooksQuery } from "../Redux/Api/baseapi";
type BookInfo = {
  title: string;
  isbn: string;
  totalQuantity: number;
};

type BorrowBookSummary = {
  totalQuantity: number;
  book: BookInfo;
};

const Borrow_Summary = () => {
  const { data, isLoading } = useGetBorrowBooksQuery(undefined);
  const book_summary = data?.data as BorrowBookSummary[];

  if (isLoading) {
    return <Loader/>
  }

  if (!book_summary || book_summary.length === 0) {
    return <p>No borrow records found.</p>;
  }

  return (
    <div className="overflow-x-auto w-10/12 mx-auto my-5">
      <h2 className="text-center font-bold text-2xl my-6">All Borrowed Book</h2>
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
          {book_summary?.map((item, index:number) => {
             const book = item.book;
             return (
            <tr key={index} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2 text-center border-r">{book?.title}</td>
              <td className="px-4 py-2 text-center border-r">{book?.isbn}</td>
              <td className="px-4 py-2 text-center border-r">{item.totalQuantity}</td>
            </tr>
          )
          } )}
        </tbody>
      </table>
    </div>
  );
};

export default Borrow_Summary;
