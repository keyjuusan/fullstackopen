import  {createRoot } from "react-dom/client";
import { GuiaTelefonica } from "./part2/GuiaTelefonica";
import "../index.css"
import { StrictMode } from "react";

createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <GuiaTelefonica/>
    </StrictMode>


)