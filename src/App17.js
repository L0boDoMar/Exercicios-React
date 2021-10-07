import logo from './logo.svg';
import './App.css';

/*Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.*/

var n1 = parseInt(prompt ("Entre com um valor:"));
var n2 = parseInt(prompt ("Entre com um valor:"));




function App() {

    if (n1 > n2) {
        return (
            <div className="App">
                <p>{n2},{n1}</p>
            </div>);
    } else {

        return (
            <div className="App">
            <p>{n1},{n2}</p>
            </div>);
    }

}

export default App;