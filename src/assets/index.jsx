import  {createRoot } from "react-dom/client";
import "../index.css"
import { StrictMode } from "react";
import BlogsList from "./part4/Bloggie";

createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <BlogsList/>
    </StrictMode>


)