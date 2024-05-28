import styles from "./TaskContent.module.css"
import { Trash } from "phosphor-react"


interface Task {
    id: number;
    text: string;
    isCompleted: boolean;    
}

interface TaskContentProps {
    task: Task;    
    onToggleComplete: (id: number) => void;
    onDeleteTask: (id: number) => void
}
  

export function TaskContent ({ task, onToggleComplete, onDeleteTask }: TaskContentProps) {
    return (
        <div className={styles.task}>
            <label className={styles.checkBoxContainer}>
                <input type="checkbox" className={styles.checkTask} checked={task.isCompleted} onChange={() => onToggleComplete(task.id)}/>
                <span className={styles.checkMark}></span>
                <p className={styles.text}>
                    {task.text}
                </p>
            </label>
            <button title="Deletar comentarios" className={styles.deleteComment} onClick={() => onDeleteTask(task.id)}>
                <Trash size={18} className={styles.icon}/>
            </button>
        </div>
    )
}