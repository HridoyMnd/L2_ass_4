import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import All_Books from "../Pages/All_Books";
import Add_Book from "../Pages/Add_Book";
import Home from "../Pages/Home";
import BookUpdate from "../Pages/BookUpdate";
import Borrow_Summary from "../Pages/Borrow_Summary";
import Borrow_Book from "../Pages/Borrow_Book";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path:"/all_books",
                element:<All_Books/>
            },
            {
                path:"/add_book",
                element:<Add_Book/>
            },
            {
                path:"/book_update/:id",
                element:<BookUpdate/>
            },
            {
                path:"/borrow_summary",
                element:<Borrow_Summary/>
            },
            {
                path:"/borrow_book",
                element:<Borrow_Book/>
            },
        ]
    }
])