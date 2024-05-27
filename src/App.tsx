// import { CreateTask } from "./components/CreateTask"
import { Header } from "./components/Header"
import { Task } from "./components/Tasks"
import "./global.css"

function App() {
  return (
    <div>
        <Header/>        
        <div>          
          <Task />
        </div>
    </div>
  )
}

export default App
