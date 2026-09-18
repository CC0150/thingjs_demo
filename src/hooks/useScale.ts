import { getThingApp } from '@/thing'
import { flyToLocation } from './useFlyToLocation'

export default async function scaleCar() {
  const thingApp = getThingApp()
  const car1 = thingApp.query('car1')[0]

  const locationOptions = {
    position: [181.30615095981315, 14.749913287360151, 149.96204221675595],
    target: [181.9983978971598, 3.6060765861565214, 116.43917503150641],
    time: 1500,
  }

  await flyToLocation(locationOptions)

  car1.scaleTo([2, 2, 2], {
    times: 4,
    time: 1000,
    loopType: THING.LoopType.PingPong,
  })
}
