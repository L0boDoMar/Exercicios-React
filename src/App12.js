import logo from './logo.svg';
import './App.css';

/*Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo). */

var n1= parseInt(prompt("Digite um valor:"));

function App() {

    if(n1%2==0){
        return (
            <div className="App">
                <p>{n1} é par!</p>
            </div>);
    }else{
        return (
            <div className="App">
                <p>{n1} é ímpar!</p>
            </div>);
    }

}

export default App;