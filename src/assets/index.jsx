import  {createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { AnecdotaApp } from "./part1/AnecdotaApp";

createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <AnecdotaApp />

        {/* <UnicafeApp /> */}
    </StrictMode>


)