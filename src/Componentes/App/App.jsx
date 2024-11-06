import "./App.css"
import { useState, useEffect} from "react";
import InforLivro from "../InforLivros/InforLivro";

function App() {
  // Determina se esta carregando lista de livros
  const [carregando,setCarregando] = useState(false);
  // Determina a busca que será realizado
  const [busca,setBusca] = useState('Tolkien');
  // Determina a lista de livros
  const [livros,setLivros] = useState([]);

  // Determina o comportamento inicial do componente
  
  // Método que consulta a API
  const getLivros = async (search) => {
    setCarregando(true);
     const resposta = await fetch (`https://www.googleapis.com/books/v1/volumes?q=inauthor:${search} `);
     const dados = await resposta.json();

     setLivros(dados.items.map((livro) => {
        return {
        id: livro.id,
        titulo: livro.volumeInfo.title,
        autores: livro.volumeInfo.authors,
        categorias: livro.volumeInfo.categories
        };
    
    }));
     setCarregando(false);
  };

  useEffect(() => {
    getLivros(busca);
    },[]);// Delimita somente uma execução



  // Comportamento do nosso componente 
    return (
      <>
  
      {
      (carregando)
      ?
      <h4>Carregando...</h4>
      :
      <h4>Lista de Livros</h4>
      }

     <InforLivro livros={livros} setBusca= {setBusca} busca={busca}getLivros={getLivros}/>

      
      </>
     
    );
}

export default App;
