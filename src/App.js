import './App.css';
import Button from 'react-bootstrap/Button';
import {useSelector, useDispatch} from 'react-redux'
import {changeColor} from './features/color'

function App() {
  const dispatch = useDispatch();

  const color = useSelector((state) => state.color.value)

  const handleClick = (event) => {
    console.log(color);  
    dispatch(changeColor(!color));
  }

  return (
    <div className="App" style={{background: color ? "red" : "blue"}}>
      <Button variant="primary" value='red' onClick={handleClick}>Primary</Button>
    </div>
  );
}

export default App;
