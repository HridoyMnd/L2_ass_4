import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import All_Books from "../Pages/All_Books";
import Add_Book from "../Pages/Add_Book";
import Book_Summary from "../Pages/Book_Summary";



export const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                path:"/",
                element:<All_Books/>
            },
            {
                path:"/add_book",
                element:<Add_Book/>
            },
            {
                path:"/book_summary",
                element:<Book_Summary/>
            }
        ]
    }
])