import logo from './logo.svg';
import './App.css';

/*Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). */

var nasc = parseInt(prompt("Digite o ano em que você nasceu:"));
var atual = parseInt(prompt("Digite o ano atual:"));

var voto = atual - nasc;


function App() {

    if(voto>=16){
        return (
            <div className="App">
                <p>Você pode votar esse ano!</p>
            </div>);
    } else {

        return (
            <div className="App">
              <p>Você não pode votar esse ano!</p>
            </div>);
    }

}

export default App;