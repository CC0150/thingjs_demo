import { getThingApp } from '@/thing'
import { flyToLocation } from './useFlyToLocation'

export default async function rotateCar() {
  const thingApp = getThingApp()
  const car1 = thingApp.query('car1')[0]

  const currentRotation = car1.rotation

  const locationOptions = {
    position: [178.81151038681762, 12.769329404315691, 149.456092309341],
    target: [179.73700749338224, -0.035549256785819904, 125.99775374261357],
    time: 1500,
  }

  await flyToLocation(locationOptions)

  car1.rotateTo([currentRotation[0], currentRotation[1] + 720, currentRotation[2]], {
    time: 4000,
  })
}
