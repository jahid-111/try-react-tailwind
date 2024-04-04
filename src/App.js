
import './App.css';
import Header from './components/Header';
import PriceSection from './components/PriceSection';
import Recharts from './components/Recharts';



function App() {



  return (
    <div className="md:px-24 mx-auto">
    <Header></Header>
    <PriceSection></PriceSection>
    <Recharts></Recharts>

    </div>
  );
}

export default App;
