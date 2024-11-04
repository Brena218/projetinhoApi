import "./App.css"
import { useState, useEffect} from "react";

function App() {
  // Determina se esta carregando lista de livros
  const [carregando,setCarregando] = useState(false);
  // Determina a busca que será realizado
  const [busca,setBusca] = useState('Tolkien');
  // Determina a lista de livros
  const [livros,setLivros] = useState([]);


  // Determina o comportamento inicial do componente
  useEffect(() => {

    // Método que consulta a API
    const getLivros = async (search) => {
      setCarregando(true);
       const resposta = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
       const dados = await resposta.json();
       setCarregando(false);
      
    };

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
      </>
      
    );
}

export default App;
