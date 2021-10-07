import logo from './logo.svg';
import './App.css';

 /* Ler um valor e escrever se é positivo, negativo ou zero */
 var numero = parseInt(prompt("Digite um número:"));

function App() {

    if (numero < 0) {
        return (
            <div className="App">
                <p> É negativo!</p>
            </div>);
    } else if (numero == 0) {
    
        return (
            <div className="App">
                <p>É igual a zero!</p>
            </div>);
    } else{
        return(
        <div className="App">
                <p>É positivo!</p>
            </div>);
    }

}

export default App;