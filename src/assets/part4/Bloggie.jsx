import { useState } from "react";
import FormNewBlog from "./components/formNewBlog";
import BlogList from "./components/blogsList";

const Bloggie = () => {

  return (
    <>
    <FormNewBlog Titulo={"Agregar Nuevo Blog"}/>
    <BlogList/>
    </>
  );
};
export default Bloggie;
