
import './App.css';
import Header from './components/Header';
import PriceSection from './components/PriceSection';
import Recharts from './components/Recharts';
import AxiosData from './components/AxiosData';



function App() {



  return (
    <div className="md:px-24 mx-auto">
    <Header></Header>
    <PriceSection></PriceSection>
    <Recharts></Recharts>
    <AxiosData></AxiosData>
    </div>
  );
}

export default App;
