import logo from './logo.svg';
import './App.css';

   /* Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem crescente. */
   var numero1 = parseInt(prompt("Digite o primeiro número:"));
   var numero2 = parseInt(prompt("Digite o segundo número:"));
   var numero3 = parseInt(prompt("Digite o terceiro número:"));

function App() {

    if ((numero1 > numero2) && (numero2 > numero3)) {
        return(
            <div className="App">
                <p>{numero3}, {numero2}, {numero1}</p>
            </div>);
    } else if ((numero1 > numero3) && (numero3 > numero2)) {
        return (
            <div className="App">
               <p>{numero2}, {numero3}, + {numero1}</p>
            </div>);
    }  else if ((numero2 > numero1) && (numero1 > numero3)) {
        return(
        <div className="App">
               <p>{numero3}, {numero1}, {numero2}</p>
            </div>);
    } else if ((numero2 > numero3) && (numero3 > numero2)) {
        return(
            <div className="App">
                   <p>{numero1}, {numero3}, {numero2}</p>
                </div>);
    }else if ((numero3 > numero1) && (numero1 > numero2)) {
        return(
            <div className="App">
                   <p>{numero2}, {numero1}, {numero3}</p>
                </div>);
    }else {
        return(
            <div className="App">
                   <p>{numero1}, {numero2}, {numero3}</p>
                </div>);
    }


}

export default App;