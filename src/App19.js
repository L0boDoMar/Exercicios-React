import logo from './logo.svg';
import './App.css';

/*A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
(considere que o mês possua 4 semanas exatas).*/

var horasTrabalhadasNoMes = parseFloat(prompt("Informe o número de horas trabalhadas no mês:"));
var salarioPorHora = parseFloat(prompt("Informe o valor do seu salário por hora:"));

function App() {

    if (horasTrabalhadasNoMes > 160) {
        var salarioTotal = (160 * salarioPorHora) + ((horasTrabalhadasNoMes - 160) * salarioPorHora * 1.5);
        return (
            <div className="App">
                <p>Salário total: R${salarioTotal.toFixed(2)}</p>
            </div>);
    } else {
        var salarioTotal = horasTrabalhadasNoMes * salarioPorHora;
        return (
            <div className="App">
           <p>Salário total: R${salarioTotal.toFixed(2)}</p>
            </div>);
    }

}

export default App;