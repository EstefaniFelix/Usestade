import './App.css';
import CalculadorDeSoma from './componentes/soma';
import CalculadorDeSub from './componentes/sub';
import CalculadorDeMulti from './componentes/multi';

function App() {
  return (
    <div className="App">
      <h1> Soma </h1>
      <CalculadorDeSoma />
      <h1> Subtração </h1>
      <CalculadorDeSub />
      <h1> Multiplicação </h1>
      <CalculadorDeMulti/>
  

    </div>
  );
}

export default App;
