import { useState } from "react";
import Door from "../components/Door";
import { createDoors, updateDoors } from "../functions/door"

export default function Home() {

  const [doors, setDoors] = useState(createDoors(4, 2))

  function renderDoors() {
    return doors.map(door => {
      return <Door key={door.number} 
        door={door} 
        onChange={newDoor => setDoors(updateDoors(doors, newDoor))} />
    })
  }

  return (
    <div style={{display: "flex"}}>
      <h1>Inicio do game</h1>
    </div>
  )
}
