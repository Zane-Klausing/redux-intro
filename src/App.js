import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import ElementList from './ElementList';
import ElementForm from './ElementForm';

function App() {

const count = useSelector((store)=> store.count);
const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Count: {count}</h1>
        <button onClick={()=> dispatch({type: 'INCREASE_COUNT'})}>Plus one!</button>
        <button onClick={()=> dispatch({type: 'DECREASE_COUNT'})}>Minus one!</button>
        <button onClick={()=> dispatch({type: 'RESET_COUNT'})}>Reset!</button>
        <ElementForm/>
        <ElementList/>
      </header>
    </div>
  );
}

export default App;
