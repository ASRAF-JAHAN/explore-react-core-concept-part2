import './App.css'
import Counter from './counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {
  function handleClick(){
    alert('Button click');
  }
  const handleClick2 = () =>{
    alert('Button 2 clicked');
  }
  const  addToFive = (num) => {
     alert(num +5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() =>{ alert('third click')} }>thrid</button>
      <button onClick={() =>{addToFive(3) } }>four</button>
    </>
  )
}

export default App
