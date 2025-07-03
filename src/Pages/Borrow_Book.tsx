const Borrow_Book = () => {
  return (
    <div>
      <form className="text-left border px-5 py-10 w-9/12 mx-auto my-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-10">Borrow a Book</h2>
        {/* Borrow quantity and Due date section */}
        <section className="flex gap-5 max-sm:flex-col">
          <div className="w-1/2 max-sm:w-full">
            <label className="ml-3">Quantity</label>
            <input
              type="number"
              placeholder="borrow quantity"
              required
              name="quantity"
              className="outline-none rounded-md focus:shadow-md  px-4 w-full py-2 border"
            />
          </div>
          <div className="w-1/2 max-sm:w-full">
            <label className="ml-3">Due Date</label>
            <input
              type="date"
              placeholder="due date"
              required
              name="d_date"
              className="outline-none rounded-md focus:shadow-md  px-4 w-full py-2 border"
            />
          </div>
        </section>

        {/* form submit button */}
        <button
         className="w-3/6 max-sm:w-9/12 max-md:w-3/6 mx-auto text-lg py-2 font-semibold rounded-md border bg-blue-500 bg-opacity-45 hover:bg-opacity-70 duration-300 block mt-10">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Borrow_Book;
