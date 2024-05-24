
import styles from "./CreateTask.module.css"
import { PlusCircle } from "phosphor-react"


export function CreateTask() {
    return (
        <div className={styles.createTask}>
            <form>
                <input type="text" placeholder="Adicionar uma nova tarefa" className={styles.inputCreateTask}/>
                <footer>
                    <button type="submit" className={styles.btnCreate}>
                        Criar
                        <PlusCircle size={24} />
                    </button>
                </footer>
            </form>
        </div>
    )
}