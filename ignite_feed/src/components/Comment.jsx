import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false}
                src="https://github.com/rianevangelista.png" 
                alt="" 
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rian Evangelista</strong>
                            <time title='10 de Outubro às 15:30' dateTime='2024-10-06 15:30:00'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom! Patabéns!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}