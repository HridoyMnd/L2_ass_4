
import useAxiosSecure from "./Instance";
import { useQuery } from "@tanstack/react-query";

const useBook = () => {
  const axios_secure = useAxiosSecure();

  // get item with endpoint
  const fetchBooks = async (endpoint = "/books") => {
    const res = await axios_secure.get(endpoint);
    return res.data;
  };
  // get item with fetch
  const { data: books = [], refetch } = useQuery({
    queryKey: ["book"],
    queryFn: () => fetchBooks(),
  });

    // Add Coupon 
    // const addProduct = async (newProduct) => {
    //     const res = await axios_secure.post(`/add_product`, newProduct)
    //     refetch();
    //     return res.data;
    // }

    // Delete Coupon
    // const deleteProduct = async (id) => {
    //     const res = await axios_secure.delete(`/delete_product/?id=${id}`);
    //     refetch();
    //     return res.data

    // };

        // Update Coupon
    // const updateProduct = async (id, update_data) => {
    //     const res = await axios_secure.put(`/update_voteCount/${id}`, update_data);
    //     refetch();
    //     return res.data
    // };

  return {books, refetch};
};

export default useBook;
