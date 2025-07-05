import { useParams } from "react-router-dom";
import { useGetBookQuery, useUpdateBookMutation } from "../Redux/Api/baseapi";
import { useEffect, useState } from "react";

const BookUpdate = () => {
  // book id from params
  const { id } = useParams();
  const { data, isLoading, error } = useGetBookQuery(id);
  const [updateBook] = useUpdateBookMutation();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    isbn_number: "",
    description: "",
    copies_number: "",
  });

  // fetch করা data formData তে বসাও
  useEffect(() => {
    if (data?.data) {
      const { title, author, genre, isbn, description, copies } = data.data;

      setFormData({
        title,
        author,
        genre,
        isbn_number: isbn.toString(),
        description,
        copies_number: copies.toString(),
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
      isbn_number: Number(formData.isbn_number),
      copies_number: Number(formData.copies_number),
      isComplete: false,
    };

    try {
      const res = await updateBook({ id, data: BookData }).unwrap();
      console.log("Updated successfully", res);
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  if (isLoading) return <p>Loading...</p>;
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
              // defaultValue={title}
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
              // value={author}/
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
              // defaultValue={genre}
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
              // defaultValue={isbn}
              required
              name="isbn_number"
              value={formData.isbn_number}
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
              // defaultValue={description}
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
              // defaultValue={copies}
              required
              name="copies_number"
              value={formData.copies_number}
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
