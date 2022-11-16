import styles from "../styles/Card.module.css"

interface CardProps {
    bgcolor?: string
    children?: any
}

export default function card(props: CardProps) {
    return (
        <div className={styles.card}
            style={{
                backgroundColor: props.bgcolor ?? "white"
            }}>
            {props.children}
        </div>
    )
}
