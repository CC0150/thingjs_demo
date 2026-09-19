import { getThingApp } from '@/thing'
import { flyToLocation } from './useFlyToLocation'

export default async function setOpacity(opacity: number) {
  const thingApp = getThingApp()
  const car3 = thingApp.query('car3')[0]
  if (!car3) {
    return
  }

  const locationOptions = {
    position: [201.7829594160496, 13.02479136768703, 139.88591130311718],
    target: [184.49840262942217, -5.489276101793361, 111.54215511495971],
    time: 1500,
  }

  await flyToLocation(locationOptions)

  car3.style.opacity = opacity
}

export function resetOpacity() {
  setOpacity(1)
}
