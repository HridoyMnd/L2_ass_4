import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
const Add_Book = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <h2>Add Book Page</h2>

      <button
        onClick={() => setIsModalOpen(true)}
        className="w-52 block mx-auto bg-amber-500 text-white text-lg rounded-md py-3 my-5 hover:bg-amber-600 duration-300"
      >
        Booking
      </button>
      {/* modal code start here */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-3 relative rounded-lg text-center ">
            <form className=" space-y-3 text-left">
              <h2 className="text-2xl font-bold text-center mb-10">Add a Book</h2>
              {/* product name and img section */}
              <section className="flex gap-5 max-sm:flex-col">
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
              <section className="flex gap-5 max-sm:flex-col">
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
              {/* owner email and product link section */}
              <section className="flex gap-5 max-sm:flex-col">
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
              onClick={() => setIsModalOpen(false)}
              className="w-3/6 max-sm:w-9/12 max-md:w-3/6 mx-auto text-lg py-2 rounded-md border bg-red-800 bg-opacity-45 hover:bg-opacity-50 duration-300 border-red-800 block">
                Submit
              </button>
            </form>

            <RxCross1
              onClick={() => setIsModalOpen(false)}
              className="top-2 right-3 absolute cursor-pointer hover:text-lg duration-300 hover:text-red-500"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Add_Book;
