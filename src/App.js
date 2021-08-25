import './App.css';
import CatrdsProvider from './CardsContext';
import Form from './Form';



function App() {
 
  return (
    <div className="App">
    <CatrdsProvider>
      <Form/>
    </CatrdsProvider>
    </div>
  );
}

export default App;

