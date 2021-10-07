import logo from './logo.svg';
import './App.css';

/*As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra.*/

let nMacas = parseInt(prompt("Digite a quantidade de maçãs compradas:"));

function App() {

    if (12<=nMacas) {
        var precoMaca = nMacas * 1;
        return (
            <div className="App">
                <p>Custo total com desconto: R$ {precoMaca},00</p>
            </div>);
    }else{
        var precoMaca1 = nMacas * 1.30;
        return (
            <div className="App">
                <p>Custo total com desconto: R$ {precoMaca1.toFixed(2)}</p>
            </div>);
    }

}

export default App;