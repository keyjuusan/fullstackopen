import  {createRoot } from "react-dom/client";
import { GuiaTelefonica } from "./part2/GuiaTelefonica";
import "../index.css"

createRoot(document.querySelector("#root")).render(
    <>
        <GuiaTelefonica/>
    </>


)