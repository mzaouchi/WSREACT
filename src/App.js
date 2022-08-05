import './App.css';
import FormTest from './Components/FormTest';
import NavTest from './Components/NavTest';
import { TestA, TestB } from './Components/TestA';
import Yaakoub from './Components/Yaakoub';
// import TestA from './Components/TestA';

function App() {
  return (
    <>
    <NavTest/>
    <FormTest/>
      <p style={{color:'green',fontWeight:'bold'}}>Ghazi</p>
      <h1>Amine</h1>
      {/* <TestA></TestA> */}
      <TestA/>
      <TestB/>
      <Yaakoub/>
    </>
  );
}

export default App;
