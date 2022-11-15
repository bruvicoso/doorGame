import DoorModel from "../model/door";

export function createDoors(amount: number, selected: number): DoorModel[] {
    return Array.from({ length: amount }, (_, i) => {
        const number = i + 1
        const hasPresent = number === selected
        return new DoorModel(number, hasPresent)
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
