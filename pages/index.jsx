import { useState } from "react";
import Door from "../components/Door";
import DoorModel from "../model/door";

export default function Home() {

  const [door1, setDoor1] = useState(new DoorModel(1))

  return (
    <div style={{display: "flex"}}>
      <Door door={door1} onChange={newDoor => setDoor1(newDoor)} />
    </div>
  )
}
