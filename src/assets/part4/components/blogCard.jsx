import { useState } from "react";

const BlogCard = ({ titulo, autor, link }) => {
  const [isLiked,setIsLiked] = useState(false)
  const [likes,setLikes] = useState(0)

  const darLike = (e)=>{
    const elementIcon = e.target;
    if(isLiked){
      elementIcon.src = "./src/assets/img/like.svg"
      setLikes(0)
      setIsLiked(!isLiked)
    }else{
      elementIcon.src = "./src/assets/img/liked.svg"
      setLikes(1)
      setIsLiked(!isLiked)
    }
  }

  return (
    <li >
        <p>{autor}</p>
      <a href={link} target="blank">
        <h2>{titulo}</h2>
      </a>
      <span className="boxLike">
        <button onClick={darLike}>
          <img src="./src/assets/img/like.svg" width="16" height="16" alt="" />
        </button>
        <p>{likes}</p>
      </span>
    </li>
  );
};
export default BlogCard;
