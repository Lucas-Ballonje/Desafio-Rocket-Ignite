import styles from "./TaskContent.module.css"
import { Trash } from "phosphor-react"


export function TaskContent () {
    return (
        <div className={styles.task}>
            <label className={styles.checkBoxContainer}>
                <input type="checkbox" className={styles.checkTask}/>
                <span className={styles.checkMark}></span>
                <p className={styles.text}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            </label>
            <button title="Deletar comentarios" className={styles.deleteComment}>
                <Trash size={18} className={styles.icon}/>
            </button>
        </div>
    )
}