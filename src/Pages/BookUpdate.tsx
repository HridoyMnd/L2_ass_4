import { useParams } from "react-router-dom";
import { useGetBookQuery, useUpdateBookMutation } from "../Redux/Api/baseapi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const BookUpdate = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetBookQuery(id);
  const [updateBook] = useUpdateBookMutation();
  const navigate = useNavigate()

const [formData, setFormData] = useState({
  title: "",
  author: "",
  genre: "",
  isbn: "",
  description: "",
  copies: 0, // Number type
});

useEffect(() => {
  if (data?.data) {
    const { title, author, genre, isbn, description, copies } = data.data;

    setFormData({
      title,
      author,
      genre,
      isbn, 
      description,
      copies, 
    });
  }
}, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const BookData = {
      ...formData,
      copies: Number(formData.copies),
      isComplete: false,
    };

    try {
      const res = await updateBook({ id, data: BookData }).unwrap();
      console.log("Updated successfully", res);
      navigate(`/all_books`)
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  if (isLoading) return <Loader/>;
  if (error) return <p>Error loading book data</p>;
  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="text-left border px-5 py-10 w-11/12 mx-auto my-8 rounded-md shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-10">Update a Book</h2>
        {/* Book title and Author name section */}
        <section className="flex gap-5 max-sm:flex-col max-sm:mb-4 mb-4">
          <div className="w-1/2 max-sm:w-full">
            <label className="ml-3">Book Title</label>
            <input
              type="text"
              placeholder="Book title"
              value={formData.title}
              onChange={handleChange}
              required
              name="title"
              className="outline-none rounded-md focus:shadow-md  px-4 w-full py-2 border"
            />
          </div>
          <div className="w-1/2 max-sm:w-full">
            <label className="ml-3">Author Name</label>
            <input
              type="text"
              placeholder="Author name"
              required
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="outline-none rounded-md focus:shadow-md  px-4 w-full py-2 border"
            />
          </div>
        </section>
        {/* Genre and ISBN number section */}
        <section className="flex gap-5 max-sm:flex-col max-sm:mb-4 mb-4">
          <div className="w-1/2 max-sm:w-full">
            <label className="ml-3">Genre</label>
            <input
              type="text"
              placeholder="Genre"
              required
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              className="outline-none rounded-md focus:shadow-md  px-4 w-full py-2 border"
            />
          </div>
          <div className="w-1/2 max-sm:w-full">
            <label className="ml-3">ISBN </label>
            <input
              type="text"
              placeholder="ISBN number"
              required
              name="isbn"
              value={formData.isbn}
              onChange={handleChange}
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
              value={formData.description}
              onChange={handleChange}
              className="outline-none rounded-md focus:shadow-md  px-4 w-full py-2 border"
            />
          </div>
          <div className="w-1/2 max-sm:w-full">
            <label className="ml-3">Copies</label>
            <input
              type="number"
              placeholder="Copies number"
              required
              name="copies"
              value={formData.copies}
              onChange={handleChange}
              className="outline-none rounded-md focus:shadow-md  px-4 w-full py-2 border"
            />
          </div>
        </section>
        {/* form submit button */}
        <button
          type="submit"
          className="w-3/6 max-sm:w-9/12 max-md:w-3/6 mx-auto text-lg py-2 font-semibold rounded-md border bg-blue-500 bg-opacity-45 hover:bg-opacity-70 duration-300 block mt-10"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookUpdate;
