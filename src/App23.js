import logo from './logo.svg';
import './App.css';

  /* Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos dois maiores*/
  var numero1 = parseInt(prompt("Digite o primeiro número:"));
  var numero2 = parseInt(prompt("Digite o segundo número:"));
  var numero3 = parseInt(prompt("Digite o terceiro número:"));

function App() {

    if ((numero1 > numero2) && (numero2 > numero3)) {
        var soma = numero1 + numero2;
        return(
            <div className="App">
                <p>A soma é {soma}</p>
            </div>);
    } else if ((numero1 > numero3) && (numero3 > numero2)) {
        var soma = numero1 + numero3;
        return (
            <div className="App">
               <p>A soma é {soma}</p>
            </div>);
    }  else if ((numero2 > numero1) && (numero1 > numero3)) {
        var soma = numero1 + numero2;
        return(
        <div className="App">
               <p>A soma é {soma}</p>
            </div>);
    } else if ((numero2 > numero3) && (numero3 > numero2)) {
        var soma = numero2 + numero3;
        return(
            <div className="App">
                   <p>A soma é {soma}</p>
                </div>);
    }else if ((numero3 > numero1) && (numero1 > numero2)) {
        var soma = numero3 + numero1;
        return(
            <div className="App">
                   <p>A soma é {soma}</p>
                </div>);
    }else {
        var soma = numero2 + numero3;
        return(
            <div className="App">
                   <p>A soma é {soma}</p>
                </div>);
    }


}

export default App;