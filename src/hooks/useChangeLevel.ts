import { getThingApp } from '@/thing'

export default function changeLevel(level) {
  const thingApp = getThingApp()

  thingApp.level.change(level)
}

export function changeLevelToBuilding() {
  const thingApp = getThingApp()
  const building = thingApp.query('.Building')[0]
  if (!building) {
    return
  }

  changeLevel(building)
}

export function goBackLevel() {
  const thingApp = getThingApp()

  thingApp.level.back()
}
