
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/login/Login';
import ToDo from './components/ToDo/todo';
import ExpenseEntryItem from './components/Expenses/ExpenseEntryItem';
import Counter from './components/Counter/Counter';
import PropsExample from './components/propsExample/PropsEg'
import Assingment from './components/Assingment/DisplayInput';
import Lyfecycle from './components/Lyfcycle/Lyfecycle';
import CntlForm from './components/Form/Cntlform';
import MultiInputForm from './components/Form/MultiInputForm';
import FormValidation from './components/Form/FormValidation';
import Regex from './components/Form/regex';
import HookForm from './components/Form/HookForm';


const name='mango';
const amount=80.00;
const spendDate= new Date("2023-06-31");
const category='Food';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/todo" element={<ToDo />}></Route>
          <Route path="/expense" element={<ExpenseEntryItem name={name} amount={amount} spendDate={spendDate} category={category}/>}></Route>
             <Route path="/Counter" element={<Counter />}></Route>
             <Route path="/PropsExample" element={<PropsExample />}></Route>
             <Route path="/Assingment" element={<Assingment/>}></Route>
             <Route path="/lyfcycle" element={<Lyfecycle/>}></Route>
             <Route path="/CntlForm" element={<CntlForm/>}></Route>
             <Route path="/MultiInputForm" element={<MultiInputForm/>}></Route>
             <Route path="/FormValidation" element={<FormValidation/>}></Route>
             <Route path="/Regex" element={<Regex/>}></Route>
             <Route path="/HookForm" element={<HookForm/>}></Route>
            
            
             
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
