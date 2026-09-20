import { getThingApp } from '@/thing'
import { flyToLocation } from './useFlyToLocation'

export default async function playAnimation() {
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

  const animation = car3.animations[0]

  animation.duration = 1000
  // animation.speed = 0.5  // 这样设置动画速度没效果

  await car3.playAnimation({
    name: '_defaultAnim_',
    loopType: THING.LoopType.PingPong,
    speed: 0.5,
  })

  console.log(animation)
}

export function resetAnimation() {
  const thingApp = getThingApp()
  const car3 = thingApp.query('car3')[0]
  if (!car3) {
    return
  }
  const animationName = car3.animations[0].name

  car3.stopAnimation(animationName)
}
