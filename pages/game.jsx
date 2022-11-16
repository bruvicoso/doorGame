import { useEffect, useState } from "react";
import Door from "../components/Door";
import { createDoors, updateDoors } from "../functions/door"
import styles from "../styles/Game.module.css"
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Game() {
  const router = useRouter()

  const [doors, setDoors] = useState([])

  useEffect(() => {
    const amountDoors = +router.query.amountDoors
    const hasGift = +router.query.giftDoor
    setDoors(createDoors(amountDoors, hasGift))
  }, [router?.query])

  function renderDoors() {
    return doors.map(door => {
      return <Door key={door.number} 
        door={door} 
        onChange={newDoor => setDoors(updateDoors(doors, newDoor))} />
    })
  }

  return (
    <div id={styles.game}>
		<Head>
			<title>Choose the door - Door Game</title>
		</Head>
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
