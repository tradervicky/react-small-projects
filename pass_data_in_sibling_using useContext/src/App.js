import logo from './logo.svg';
import './App.css';
import { DataProvider } from './DataContext';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';


function App() {
  return (
    <DataProvider>
    <div className="App">
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
    </div>
    </DataProvider>
  );
}

export default App;
