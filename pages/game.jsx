import { useState } from "react";
import Door from "../components/Door";
import { createDoors, updateDoors } from "../functions/door"
import styles from "../styles/Game.module.css"
import Link from "next/link";

export default function Game() {

  const [doors, setDoors] = useState(createDoors(8, 2))

  function renderDoors() {
    return doors.map(door => {
      return <Door key={door.number} 
        door={door} 
        onChange={newDoor => setDoors(updateDoors(doors, newDoor))} />
    })
  }

  return (
    <div id={styles.game}>
        <div className={styles.doors}>
            {renderDoors()}
        </div>
        <div className={styles.buttons}>
            <Link href="/">
                <button>Menu</button>
            </Link>
        </div>
    </div>
  )
}
