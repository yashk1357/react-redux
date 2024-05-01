import './App.css'
import Todos from './components/Todos'
import AddTodos from './components/AddTodos'
import { Provider } from 'react-redux'
import { store } from './App/store'

function App() {

  return (
    <Provider store={store}>
     <h1>To-do app</h1>
     <br />
     <AddTodos />
     <Todos />
    </Provider>
  )
}

export default App
