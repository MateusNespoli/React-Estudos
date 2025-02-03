
import './App.css'
import luigi from "./assets/luigi.png"
import ManageData from './components/ManageData';

function App() {

  return(
    <div>
      <h1>Avançando em React</h1>
      {/*Imagem em public */}
      <div>
        <img src="img1.jpg" alt="Paisagem" />
      </div>
      {/*Imagem em asset */}
      <div>
        <img src={luigi} alt="Luigi" />
      </div>
      <ManageData />
    </div>
   
  );
}

export default App
