import styles from './styles.module.scss'
import logoImg from '../../assets/logo.svg'

export function MessageList(){
    return (
        <div className={styles.messageListWrapper}>
        <img src={logoImg} alt="DoWhile 2021" />


        <ul className={styles.messageList}>
            <li className={styles.message}>
                <p className={styles.messageContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsum similique odit iure, enim officia ea reiciendis natus autem reprehenderit dolores saepe quas eveniet delectus explicabo nihil! Atque, itaque ab.</p>
                <div className={styles.messageUser}>
                    <div className={styles.userImage}> 
                    <img src="https://github.com/dev-carol.png" alt="Carol Santos" />
                    </div>
                    <span>Carol Santos</span>
                </div>
            </li>

            <li className={styles.message}>
                <p className={styles.messageContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatem ullam perspiciatis laboriosam temporibus molestiae eius provident ut molestias quos necessitatibus, accusamus magni dolorem nesciunt voluptate praesentium magnam. Perferendis, perspiciatis!</p>
                <div className={styles.messageUser}>
                    <div className={styles.userImage}> 
                    <img src="https://github.com/dev-carol.png" alt="Carol Santos" />
                    </div>
                    <span>Carol Santos</span>
                </div>
            </li>

            <li className={styles.message}>
                <p className={styles.messageContent}>Projeto iniciado com sucesso</p>
                <div className={styles.messageUser}>
                    <div className={styles.userImage}> 
                    <img src="https://github.com/dev-carol.png" alt="Carol Santos" />
                    </div>
                    <span>Carol Santos</span>
                </div>
            </li>
        </ul>
        </div>
    )
}