import { useState } from "react";
import Input from "./input";

const FormNewBlog = ({ Titulo }) => {
  const [newAutor, setNewAutor] = useState("");
  const [newTitulo, setNewTitulo] = useState("");
  const [newUrl, setNewUrl] = useState("");

  return (
    <>
      <h3>{Titulo}</h3>

      <form>
        <Input
          value={newAutor}
          setValue={setNewAutor}
          name={"autor"}
          labelName={"Nombre del Autor:"}
        />

        <Input
          value={newTitulo}
          setValue={setNewTitulo}
          name={"titulo"}
          labelName={"Titulo:"}
        />

        <Input
          value={newUrl}
          setValue={setNewUrl}
          name={"url"}
          labelName={"Url:"}
        />
        <button>Enviar</button>
      </form>
    </>
  );
};
export default FormNewBlog;
