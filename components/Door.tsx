import styles from "../styles/Door.module.css"
import DoorModel from "../model/door"
import Gift from "../components/Gift"

interface DoorProps {
    door: DoorModel
    onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {
    const { door } = props
    const selected = door.selected && !door.isOpen ? styles.selected : ''

    const toggleSelection = e => props.onChange(door.toggleSelect()) 
    const open = e => {
        e.stopPropagation()
        props.onChange(door.open()) 
    }

    function renderCloseDoor() {
        return (
            <div className={styles.door}>
                <div className={styles.number}>{door.number}</div>
                <div className={styles.knob} onClick={open} />
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={toggleSelection}>
            <div className={`${styles.frame} ${selected}`}>
                {door.isClose ? 
                    renderCloseDoor() : 
                    door.hasGift ? <Gift></Gift> : false}
            </div>
            <div className={styles.floor} />
        </div>
    )
}
