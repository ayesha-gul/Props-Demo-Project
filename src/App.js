
import { useDebugValue } from 'react';
import './App.css';
import Value from './Context';
import { Teacher } from './Teacher';

function App() {
  return (
     <Value.Provider value={["degi pulao", 'achar gosht', 'karhai']}>
    <div className="App">
    <Teacher  name={'Anaya'} nick={'merab'} kick={'Aliya'} Kill={['Green' , 'red', 'Blue']} />

    
    </div>
    </Value.Provider>
  );
}

export default App;
