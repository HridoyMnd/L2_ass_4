
const Add_Book = () => {
  return (
    <div>
      <form className="text-left border px-5 py-10 w-11/12 mx-auto my-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-10">Add a Book</h2>
        {/* product name and img section */}
        <section className="flex gap-5 max-sm:flex-col max-sm:mb-4 mb-4">
          <div className="w-1/2 max-sm:w-full">
            <label className="ml-3">Title</label>
            <input
              type="text"
              placeholder="Book title"
              required
              name="title"
              className="outline-none rounded-md focus:shadow-md  px-4 w-full py-2 border"
            />
          </div>
          <div className="w-1/2 max-sm:w-full">
            <label className="ml-3">Author</label>
            <input
              type="text"
              placeholder="Author name"
              required
              name="author"
              className="outline-none rounded-md focus:shadow-md  px-4 w-full py-2 border"
            />
          </div>
        </section>
        {/* owner name and img section */}
        <section className="flex gap-5 max-sm:flex-col max-sm:mb-4 mb-4">
          <div className="w-1/2 max-sm:w-full">
            <label className="ml-3">Genre</label>
            <input
              type="text"
              placeholder="Genre"
              required
              name="Genre"
              className="outline-none rounded-md focus:shadow-md  px-4 w-full py-2 border"
            />
          </div>
          <div className="w-1/2 max-sm:w-full">
            <label className="ml-3">ISBN </label>
            <input
              type="number"
              placeholder="ISBN number"
              required
              name="isbn number"
              className="outline-none rounded-md focus:shadow-md  px-4 w-full py-2 border"
            />
          </div>
        </section>
        {/* description and copies number section */}
        <section className="flex gap-5 max-sm:flex-col max-sm:mb-4 mb-4">
          <div className="w-1/2 max-sm:w-full">
            <label className="ml-3">Description</label>
            <input
              type="text"
              placeholder="Sort description"
              required
              name="description"
              className="outline-none rounded-md focus:shadow-md  px-4 w-full py-2 border"
            />
          </div>
          <div className="w-1/2 max-sm:w-full">
            <label className="ml-3">Copies</label>
            <input
              type="number"
              placeholder="Copies number"
              required
              name="copies number"
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

export default Add_Book;
