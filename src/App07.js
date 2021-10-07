import logo from './logo.svg';
import './App.css';

/* O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do 
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor 
seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, 
calcular e escrever o custo final ao consumidor.*/

let custoFabrica = parseFloat(prompt("Informe o custo de fábrica:"));

function App() {

    let valorFinal = custoFabrica + (custoFabrica*0.28) + (custoFabrica*0.45);

    return (
        <div className="App">
            <p>O valor final é de R${valorFinal},00.</p>
        </div>
    );
}

export default App;
