import { useState } from "react";
import { useAddBookMutation, } from "../Redux/Api/baseapi";
import { useNavigate } from "react-router-dom";

const Add_Book = () => {
  const navigate = useNavigate();
  const [createBook] = useAddBookMutation();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    description: "",
    copies: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const BookData = {
      ...formData,
      isComplete: false,
      copies_number: Number(formData.copies),
    };

    try {
      const res = await createBook(BookData).unwrap();
      console.log("Success:", res);
      navigate(`/all_books`)
    } catch (err) {
      console.error("Error:", err);
    }
  };


  return (
    <div>
      <form
      onSubmit={onSubmit}
      className="text-left border px-5 py-10 w-11/12 mx-auto my-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-10">Add a Book</h2>
        {/* Book title and Author name section */}
        <section className="flex gap-5 max-sm:flex-col max-sm:mb-4 mb-4">
          <div className="w-1/2 max-sm:w-full">
            <label className="ml-3">Book Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Book title"
              className="outline-none rounded-md focus:shadow-md px-4 w-full py-2 border"
            />
          </div>
          <div className="w-1/2 max-sm:w-full">
            <label className="ml-3">Author Name</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              placeholder="Author name"
              className="outline-none rounded-md focus:shadow-md px-4 w-full py-2 border"
            />
          </div>
        </section>
        {/* Genre and ISBN number section */}
        <section className="flex gap-5 max-sm:flex-col max-sm:mb-4 mb-4">
          <div className="w-1/2 max-sm:w-full">
            <label className="ml-3">Genre</label>
            <input
              type="text"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              required
              placeholder="Genre"
              className="outline-none rounded-md focus:shadow-md px-4 w-full py-2 border"
            />
          </div>
          <div className="w-1/2 max-sm:w-full">
            <label className="ml-3">ISBN </label>
            <input
              type="text"
              name="isbn"
              value={formData.isbn}
              onChange={handleChange}
              required
              placeholder="ISBN number"
              className="outline-none rounded-md focus:shadow-md px-4 w-full py-2 border"
            />
          </div>
        </section>
        {/* description and copies number section */}
        <section className="flex gap-5 max-sm:flex-col max-sm:mb-4 mb-4">
          <div className="w-1/2 max-sm:w-full">
            <label className="ml-3">Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Short description"
              className="outline-none rounded-md focus:shadow-md px-4 w-full py-2 border"
            />
          </div>
          <div className="w-1/2 max-sm:w-full">
            <label className="ml-3">Copies</label>
            <input
              type="number"
              name="copies"
              value={formData.copies}
              onChange={handleChange}
              required
              placeholder="Copies number"
              className="outline-none rounded-md focus:shadow-md px-4 w-full py-2 border"
            />
          </div>
        </section>
        {/* form submit button */}
        <button
        type="submit"
         className="w-3/6 max-sm:w-9/12 max-md:w-3/6 mx-auto text-lg py-2 font-semibold rounded-md border bg-blue-500 bg-opacity-45 hover:bg-opacity-70 duration-300 block mt-10">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add_Book;
