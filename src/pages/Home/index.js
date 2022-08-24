import api from '../../services/api';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '.home.css';

function Home(){
    const[filmes, setFilmes] = useState([]);

    //quando ler a pagina, e executado o useEffect
    useEffect(() =>{
        //ler os filmes
        async function lerFilmes(){
            //o metodo get ai concatenar a baseURL com a rota para o componente Home
            const resposta = await api.get('r-api/api/?api=filmes');
            // console.log(resposta.data);
            setFilmes(resposta.data);
        };
        lerFilmes();


    }, []);
    return(
       <div className='container'>
            <div className='lista-filmes'>
                {filmes.map(filme) =>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.nome}</strong>
                            <img src={filme.foto} alt={filme.foto} />
                            <Link to={'/filme/${filme.id}'}></Link>

                        </article>
                    )
                }}}
            </div>
       </div>
    )
}

export default Home;