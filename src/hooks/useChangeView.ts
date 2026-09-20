import { getThingApp } from '@/thing'

let isFirstPerson = false
let isInit = false

export default function changeView() {
  const thingApp = getThingApp()
  const person = thingApp.query('#person1')[0]
  if (!person) return

  if (!isInit) {
    const component = new THING.EXTEND.FlyControlComponent({ time: 2000 })
    person.addComponent(component, 'fpsControl')
    person.fpsControl.setEyeHeight(1.8)
    person.fpsControl.setAttachCamera(thingApp.camera)
    person.fpsControl.setThirdPersonCameraDis(5) // 初始化就设好
    isInit = true
  }

  isFirstPerson = !isFirstPerson
  person.fpsControl.setFirstPersonView(isFirstPerson)
}

export function resetView() {
  const thingApp = getThingApp()
  const person = thingApp.query('#person1')[0]
  if (!person) {
    return
  }

  person.removeComponent('fpsControl')
  thingApp.camera.flyTo({
    position: [162.64985603989814, 29.6774697721321, 181.5000326501234],
    target: [165.04913966800245, 1.500981255502019, 120.6860038796044],
    time: 1000,
  })
}
