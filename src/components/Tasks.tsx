import styles from "./Task.module.css"
import { Trash } from "phosphor-react"

export function Task() {
    return (
        <div className={styles.tasks} >
            <div className={styles.headerTaskContent}>
                <span className={styles.createTask}>Tarefas criadas <span className={styles.count}>5</span> </span>

                <span className={styles.completeTask}>Concluidas <span className={styles.completeCount}>2 de 5</span></span>
            </div>

            <div className={styles.listContentTask}>
                <div className={styles.task}>
                    <label>
                        <input type="radio" className={styles.checkTask}/>
                    </label>
                    <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                    <Trash size={24}/>
                </div>
            </div>            
        </div>
    )
}