import { getThingApp } from '@/thing'
import { flyToLocation } from './useFlyToLocation'

export default async function createBox() {
  const thingApp = getThingApp()
  const car2 = thingApp.query('car2')[0]

  let box
  box = thingApp.query('box')[0]
  if (box) {
    box.destroy()
  }

  const locationOptions = {
    position: [201.7829594160496, 13.02479136768703, 139.88591130311718],
    target: [184.49840262942217, -5.489276101793361, 111.54215511495971],
    time: 1500,
  }

  await flyToLocation(locationOptions)

  box = new THING.Box([2, 2, 2], {
    name: 'box',
    parent: car2,
    localPosition: [0, 0.6, 1.7],
  })

  box.fadeIn({
    duration: 800,
  })

  const worker = new THING.Entity({
    name: 'worker',
    url: new URL('@/assets/entity/person/', import.meta.url).href,
    parent: car2,
    localPosition: [-2, 0, 0],
  })

  worker.fadeIn({
    duration: 800,
  })

  return box
}

export function resetBox() {
  const thingApp = getThingApp()
  const box = thingApp.query('box')[0]
  const worker = thingApp.query('worker')[0]
  if (box) {
    box.fadeOut({
      duration: 800,
      onComplete: () => {
        box.destroy()
      },
    })
  }
  if (worker) {
    worker.fadeOut({
      duration: 800,
      onComplete: () => {
        worker.destroy()
      },
    })
  }
}
