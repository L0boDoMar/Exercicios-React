import logo from './logo.svg';
import './App.css';

/*   Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso 
contrário escrever NÃO É MAIOR QUE 10! */

var n1= parseInt(prompt("Digite um valor:"));

function App() {

    if(n1>10){
        return (
            <div className="App">
                <p>É MAIOR QUE 10!</p>
            </div>);
    }else{
        return (
            <div className="App">
                <p>NÃO É MAIOR QUE 10!</p>
            </div>);
    }

}

export default App;