import Card from "../components/Card"
import InputNumber from "../components/InputNumber"
import styles from "../styles/Form.module.css"
import Link from "next/link"
import { useState } from "react"
import Head from "next/head"

export default function Form() {
	const [amountDoors, setAmountDoors] = useState(3)
	const [giftDoor, setGiftDoor] = useState(1)
	const [errorMsg, setErrorMsg] = useState("")

	const validation = (e) => {
		if (giftDoor > amountDoors) {
			e.preventDefault()
			setErrorMsg("The gift needs to be at a valid door")
		}
    }

	const clearMessage = () => setErrorMsg("")

	return (
		<div className={styles.form}>
			<Head>
				<title>Menu - Door Game</title>
			</Head>
			<div>
				<h1 style={{color: "red"}}>{errorMsg}</h1>
				<span style={{cursor: "pointer"}} onClick={clearMessage}>{errorMsg !== "" ? "X" : ""}</span>
			</div>
			<div>
				<Card bgcolor="#c0392c" >
					<h1>Monty Hall</h1>
				</Card>
				<Card>
					<InputNumber text="How many doors?" value={amountDoors} onChange={newAmount => setAmountDoors(newAmount)} />
				</Card>
			</div>
			<div>
				<Card>
					<InputNumber text="What door is the gift?" value={giftDoor} onChange={newDoor => setGiftDoor(newDoor)} />
				</Card>
				<Card bgcolor="#28a085">
					<Link href={{ pathname: '/game', query: { amountDoors, giftDoor } }} as="/game">
						<h2 className={styles.link} onClick={e => validation(e)}>Start</h2>
					</Link>
				</Card>
			</div>
		</div>
	)
}
