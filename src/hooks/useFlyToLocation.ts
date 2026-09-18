import { getThingApp } from '@/thing'

interface FlyToOptions {
  position: number[]
  target: number[]
  time?: number
}

export async function flyToLocation(options: FlyToOptions) {
  const thingApp = getThingApp()
  const { position, target, time } = options
  await thingApp.camera.flyToAsync({
    position,
    target,
    time,
  })
}

export async function resetFlyToLocation(options: FlyToOptions) {
  const thingApp = getThingApp()
  const { position, target, time } = options
  await thingApp.camera.flyToAsync({
    position,
    target,
    time,
  })
}
