import { Link } from "react-router-dom";
import Card from'../Components/Card';
export default function Detalhe() {

    const { id } = useParams();
    const lista = JSON.parc( localStorag.getItem("Lista"));

    const Gastos = lista.filter((objeto) => {
        if(objeto.id == id){
            return objeto;
        }
        return null;
    }) 

    console.log(atividade[0] );

    return (
         <Card atividade={atividade[0]} />
    );
}