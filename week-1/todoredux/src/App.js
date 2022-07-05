import './App.css';
import { Counter } from './Counter/Counter';
import { MainTodo } from './Todo/MainTodo';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr></hr>
      <MainTodo />
    </div>
  );
}

export default App;
