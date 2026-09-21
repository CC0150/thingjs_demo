import { getThingApp } from '@/thing'
import { flyToLocation } from './useFlyToLocation'

let routeLine

/** 获取 car2 实例 */
function getCar2() {
  return getThingApp().query('car2')[0]
}

/** 获取路由点 */
function getRoutePoints(): number[][] {
  const car2 = getCar2()
  const [x, y, z] = car2.position
  return [
    [x, y, z],
    [x - 10, y, z],
    [x - 10, y, z + 10],
    [x, y, z + 10],
  ]
}

/** 创建路由线 */
function createRoute() {
  if (routeLine) return routeLine
  routeLine = new THING.RouteLine({
    name: 'Routeline',
    width: 0.3,
    closure: true,
    arrow: true,
    points: getRoutePoints(),
  })
  routeLine.visible = false
  return routeLine
}

let originalPosition: number[] | null = null
let originalRotation: number[] | null = null

/** 驾驶小车 */

export default async function driveCar() {
  const car2 = getCar2()

  // 线和车用同一个 y
  const route = createRoute()

  originalPosition = [...car2.position]
  originalRotation = [...car2.rotation]

  const locationOptions = {
    position: [201.7829594160496, 13.02479136768703, 139.88591130311718],
    target: [184.49840262942217, -5.489276101793361, 111.54215511495971],
    time: 1500,
  }

  await flyToLocation(locationOptions)

  route.visible = true

  car2.movePath({
    path: getRoutePoints(),
    closure: true,
    time: 8000,
    orientToPath: true,
    complete: () => {
      // resetDriveCar()
    },
  })
}

/** 重置小车行驶 */
export function resetDriveCar() {
  if (originalPosition) {
    getCar2().position = originalPosition
  }
  if (originalRotation) {
    getCar2().rotation = originalRotation
  }

  if (routeLine) {
    routeLine.destroy()
    routeLine = null
  }
}
