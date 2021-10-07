import logo from './logo.svg';
import './App.css';

/*Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade 
dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.*/
let anos = parseInt(prompt("Informe sua idade em anos:"));
let meses = parseInt(prompt("Informe sua idade em meses:"));
let dias = parseInt(prompt("Informe sua idade em dias:"));
function App() {

    let IdadeDias = (anos*365)+(meses*30)+dias;

    return (
        <div className="App">
            <p> Sua idade é de {IdadeDias} dias.</p>
        </div>
    );
}

export default App;