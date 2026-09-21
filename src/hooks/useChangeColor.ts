import { getThingApp } from '@/thing'
import { flyToLocation } from './useFlyToLocation'
import { reset } from './useReset'

/** 改变小车的颜色 */
export async function changeColor(color: string) {
  reset()
  const thingApp = getThingApp()
  const car1 = thingApp.query('car1')[0]
  if (!car1) return

  const locationOptions = {
    position: [178.81151038681762, 12.769329404315691, 149.456092309341],
    target: [179.73700749338224, -0.035549256785819904, 125.99775374261357],
    time: 1500,
  }

  await flyToLocation(locationOptions)

  car1.style.color = color
}

/** 重置小车颜色 */
export function resetColor() {
  const app = getThingApp()
  const car1 = app.query('car1')[0]
  if (!car1) return
  car1.style.color = null
}
