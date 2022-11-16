import styles from "../styles/InputNumber.module.css"

interface InputNumberProps {
    text: string
    value: number
    onChange: (newValue: number) => void
}

export default function InputNumber(props: InputNumberProps) {
    const dec = () => props.onChange(props.value > 2 ? props.value - 1 : 1)
    const inc = () => props.onChange(props.value + 1)

    return (
        <div className={styles.inputNumber}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.buttons}>
                <button onClick={dec}>-</button>
                <button onClick={inc}>+</button>
            </div>
        </div>
    )
}
