import { getThingApp } from './index'

// 获取当前 ThingApp 实例

/** 改变车的颜色 */
export function changeColor() {
  const app = getThingApp()

  const car1 = app.query('car1')[0]
  const colors = ['red', 'blue', 'purple', null]
  let colorIndex = -1
  car1.on('click', () => {
    colorIndex = (colorIndex + 1) % colors.length
    car1.style.color = colors[colorIndex]
  })
}

/** 添加 Marker */
export function addMarker() {
  const app = getThingApp()
  const car1 = app.query('car1')[0]

  const marker = new THING.Marker({
    name: car1.name + '_marker',
    // Marker 跟随 car
    parent: car1,
    // 放到 car 顶部
    localPosition: [0, car1.boundingBox.size[1], 0],
    style: {
      // image: new THING.ImageTexture(new URL('@/assets/images/warning.png', import.meta.url).href),
      image: new URL('@/assets/images/warning.png', import.meta.url).href,
    },
    pivot: [0.5, 0],
    scale: [1, 1, 1],
  })
  // 初始隐藏
  marker.visible = false
  return marker
}

let routeLine

function getCar2() {
  return getThingApp().query('car2')[0]
}

function getRoutePoints(y: number): number[][] {
  const car2 = getCar2()
  const [x, , z] = car2.position
  return [
    [x, y, z],
    [x - 10, y, z],
    [x - 10, y, z + 10],
    [x, y, z + 10],
  ]
}

function createRoute(y: number) {
  if (routeLine) return routeLine
  routeLine = new THING.RouteLine({
    name: 'Routeline',
    width: 0.3,
    closure: true,
    arrow: true,
    points: getRoutePoints(y),
  })
  routeLine.visible = false
  return routeLine
}

export function driveCar() {
  const car2 = getCar2()
  const y = car2.position[1]

  // 线和车用同一个 y
  const route = createRoute(y)

  car2.off('click') // 防止重复绑定
  car2.on('click', () => {
    route.visible = true

    const originalPosition = [...car2.position]
    const originalRotation = [...car2.rotation]

    car2.movePath({
      path: getRoutePoints(y),
      closure: true,
      time: 10000,
      orientToPath: true,
      complete: () => {
        console.log('小车已跑完一圈')
        car2.position = originalPosition
        car2.rotation = originalRotation
        if (routeLine) {
          routeLine.destroy() // 销毁 3D 对象
          routeLine = null // 清空引用，下次可重建
        }
      },
    })
  })
}
