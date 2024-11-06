import { useRef } from "react";

function  InforLivro ({livros,setBusca,getLivros,busca}){
    const input = useRef();
    return (
        <>
         <input type="text" ref={input} />
         <button onClick={() => {setBusca (input.current.value); getLivros(busca)}}>Busca</button>
       <ul>
        {livros.map((livro) => {
         return <li key= {livro.id}> Titulo: {livro.titulo}
                <ul>
                    <li>Autor: {livro.autores}</li>
                    <li>Categoria: {livro.categorias}</li>
                </ul>

         </li>;
       
         })}
       </ul>

      
        </>
    );
}


export default InforLivro;