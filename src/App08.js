import logo from './logo.svg';
import './App.css';

/*  Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele 
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas 
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do 
vendedor. */

let carrosVendidos = parseInt(prompt("Informe a quantidade de carros vendidos pelo vendedor:"));
let valorVenda =parseFloat(prompt("Informe o valor total das vendas:"));
let salFixo = parseFloat(prompt("Informe o valor do Salário Fixo:"));
let valorCarroVendido= parseFloat(prompt("Informe a comissão por carro vendido:"));

function App() {

    let salFinal= salFixo + (carrosVendidos*valorCarroVendido) + (valorVenda*0.05);

    return (
        <div className="App">
            <p>O salário final é de R${salFinal},00.</p>
        </div>
    );
}

export default App;