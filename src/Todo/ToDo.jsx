//*Registro/Lista de Gastos*//

import { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';



/*Definindo o componente RegistroDeGastos*/
export default function RegistroDeGastos() {

    /*Utilizei o useState,sendo reponsável por criar estados no componente. Cada useState recebe um valor inicial vazio (no caso das strings) ou um array vazio (no caso de Gastos). Esses estados serão usados para armazenar as informações inseridas pelos usuários*/
    const [lista, setLista] = useState ([]);
    const [Descricao, setDescricao] = useState ("");
    const [Data, setData] = useState ("");
    const [Preco, setPreco] = useState ("");
    const [Categoria, setCategoria] = useState ("");
    const [Gastos, setGastos] = useState ([]);
    const [ExibirMensagem, setExibirMensagem] = useState(false);


    /* Estabeleci uma função salvarGastos que será executada quando os dados for enviado, onde o "'e.preventDefault" evita que os dados seja enviado automaticamente*/
    const salvarGastos = (e) { 
        e.preventDefault();
        setLista([...lista, { Descricao:Descricao, Data:Data, Preco:Preco, Categoria:Categoria, Gastos:Gastos }]);
        setDescricao ("");
        setData ("");
        setPreco ("");
        setCategoria("");
        setGastos("");
        setExibirMensagem ("true");
        }
    }

     /*Defini uma função removerGastos, onde remove o gasto pelo indice*/
    const removerGastos = (index) => {
        const despesasAtualizadas = [...despesas];
        despesasAtualizadas.splice(index, 1);
        setDespesas(despesasAtualizadas);
    }
   

    //"form on Submit" define um formulário onde os usuários podem inserir informações sobre as despesas. O evento onSubmit está associado à função salvarGatos, que será chamada quando os dadod for enviado./
    return (
        <div>
            <h1>Registro/Lista de Gastos</h1>
            <Link to="/">home</Link>
            <form onSubmit={salvarGastos}> 

            <div>
            <label htmlFor="Descricao">Descricao:</label>
            <input
            type="text"
            value={Descricao}
            onChange={(e) => setDescricao(e.target.value)} />
        </div>


        <div>
            <label htmlFor="Data">Data:</label>
            <input
            type="date"
            value={Date}
            onChange={(e) => setDate(e.target.value)} />
        </div>


        <div>
            <label htmlFor="Preco">Preco:</label>
            <input
            type="number"
            value={Preco}
            onChange={(e) => setPreco(e.target.value)} />
        </div>


        <div>
            <label htmlFor="Categoria">Categoria:</label>
            <input
            type="text"
            value={Categoria}
            onChange={(e) => setCategoria(e.target.value)} />
        </div>


        <div>
            <label htmlFor="Gastos">Gastos:</label>
            <input
            type="number"
            value={Gastos}
            onChange={(e) => setGastos(e.target.value)} />
        </div>


        <button type="submit">Adicionar Gastos</button>
            </form>

            <div>
                {ExibirMensagem && (<p>Parabéns! Sua lista de gastos foi criada com sucesso.</p>)}

                <ul>
                    {lista.map((item, index) => (
                        <li key={index}>
                            <p>Descrição: {item.Descricao}</p>
                            <p>Data: {item.Data}</p>
                            <p>Preço: R$ {item.Preco}</p>
                            <p>Categoria: {item.Categoria}</p>
                            {item.Gastos && <p>Descrição.Gastos: {item.Gastos}</p>}
                            <button onClick={() => removerGastos(index)}>Remover</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    