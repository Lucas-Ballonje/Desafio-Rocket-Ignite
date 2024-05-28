import { PlusCircle } from "phosphor-react"
import styles from "./Task.module.css"
import { TaskContent } from "./TaskContent"
import { FormEvent, useState } from "react"


interface Task {
    id: number;
    text: string;
    isCompleted: boolean;
}

export function Task() {

    const [tasksList, setTasksLists] =  useState<Task[]>([]);

    function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
        event?.preventDefault()  
        
        const newTaskText = event.currentTarget.description.value.trim() 

        if(newTaskText == ""){
            return;
        }
        
        const newTask = {
            id: tasksList.length + 1,
            text: newTaskText,
            isCompleted: false
        }
        
        setTasksLists([...tasksList, newTask ])                
        
        event.currentTarget.reset()
    }

    function handleToggleTaskCompletion(id: number){
        setTasksLists(prevTasks =>
            prevTasks.map(task =>
              task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
            )
        );
    }

    function deleteTask(taskToDeleteId: number) {
        const tasksWithoutDeletedOne = tasksList.filter(task => task.id !== taskToDeleteId);
        setTasksLists(tasksWithoutDeletedOne);
    }

    const completedTasksCount = tasksList.filter(task => task.isCompleted).length;
    

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
                    <span className={styles.createdTask}>Tarefas criadas <span className={styles.count}>{tasksList.length}</span> </span>

                    <span className={styles.completeTask}>Concluidas <span className={styles.completeCount}>{completedTasksCount} de {tasksList.length}</span></span>
                </div>
                <div className={styles.listContentTask}>
                    {tasksList.map((taskList) => {
                        return <TaskContent key={taskList.id} task={taskList} onToggleComplete={handleToggleTaskCompletion} onDeleteTask={deleteTask}/>
                    })}
                </div>            
            </div>
        </div>        
    )
}