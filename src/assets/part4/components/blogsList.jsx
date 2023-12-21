import BlogsList from "../Bloggie";
import BlogCard from "./blogCard";

const Blogs = [
  {
    autor: "Yo",
    titulo: "Un Titulo Llamativo",
    link: "https://github.com/keyjuusan",
  },
  {
    autor: "Tu",
    titulo: "Dos Titulos Llamativos",
    link: "https://github.com/keyjuusan",
  },
  {
    autor: "El",
    titulo: "Tres Titulos Llamativos",
    link: "https://github.com/keyjuusan",
  },
  
];

const BlogList = () => {
  return (
    <>
      <h3>Lista de Blogs</h3>
      <ul>
        {Blogs.map((blog,i)=>
          (<BlogCard key={i} titulo={blog.titulo} autor={blog.autor} link={blog.link}/>)
        )}
      </ul>
    </>
  );
};
export default BlogList;
