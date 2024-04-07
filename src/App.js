import Navbar from './components/navbar/Navbar';
import TodoForm from './components/todoForm/TodoForm';
import TodoList from './components/todoList/TodoList';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Provider store={store}>
        <TodoForm/>
        <TodoList/>
      </Provider>
    </div>
  );
}

export default App;
