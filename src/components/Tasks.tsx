import { PlusCircle } from "phosphor-react"
import styles from "./Task.module.css"
import { TaskContent } from "./TaskContent"
import { FormEvent, useState } from "react"

export function Task() {

    const [tasksList, setTasksLists] = useState([1, 2])

    function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
        event?.preventDefault()  
        
        const newTaskText = event.currentTarget.description.value                
        
        setTasksLists([...tasksList, newTaskText])                
        
    }

    return (
        <div>
            <div className={styles.createTask}>
                <form onSubmit={handleCreateNewTask}>
                    <input type="text" placeholder="Adicionar uma nova tarefa" name="description" className={styles.inputCreateTask}/>
                    <footer>
                        <button type="submit" className={styles.btnCreate}>
                            Criar
                            <PlusCircle size={24} />
                        </button>
                    </footer>
                </form>
            </div>
            <div className={styles.tasks} >
                <div className={styles.headerTaskContent}>
                    <span className={styles.createdTask}>Tarefas criadas <span className={styles.count}>5</span> </span>

                    <span className={styles.completeTask}>Concluidas <span className={styles.completeCount}>2 de 5</span></span>
                </div>
                <div className={styles.listContentTask}>
                    {tasksList.map(taskList => {
                        return <TaskContent />
                    })}
                </div>            
            </div>
        </div>        
    )
}