import DoorModel from "../model/door";

export function createDoors(amount: number, doorGift: number): DoorModel[] {
    return Array.from({ length: amount }, (_, i) => {
        const number = i + 1
        const hasGift = number === doorGift
        return new DoorModel(number, hasGift)
    })
}

export function updateDoors(doors: DoorModel[], updateDoor: DoorModel): DoorModel[] {
    return doors.map(currentDoor => {
        if (currentDoor.number === updateDoor.number) {
            return updateDoor
        }

        return updateDoor.isOpen ? currentDoor : currentDoor.removeSelect()
    })
}
