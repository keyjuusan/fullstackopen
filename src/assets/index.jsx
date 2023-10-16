import  {createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { CursoInfo } from "./part1/CursoInfo";

// import { UnicafeApp } from "./part1/UnicafeApp";
// import { AnecdotaApp } from "./part1/AnecdotaApp";

createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <CursoInfo />
        {/* <UnicafeApp /> */}
        {/* <AnecdotaApp /> */}
    </StrictMode>


)