import { getThingApp } from '@/thing'

export default async function drawLine() {
  const thingApp = getThingApp()

  const car1 = thingApp.query('car1')[0]

  const points = [
    [10, 0, 0],
    [10, 0, 10],
    [0, 0, 10],
    [0, 0, 0],
  ]
  // 创建像素线
  const pixelLine = new THING.PixelLine({
    parent: car1,
    selfPoints: points,
    // closure: true, // 以闭环方式创建
    localPosition: [0, 0, -10],
  })
  // 创建粗线
  const fatLine = new THING.FatLine({
    selfPoints: points,
    width: 5,
    parent: car1, // 父物体设为 car1
    localPosition: [-10, 0, -10], // 相对于 car1 向右 10 米
  })
  // 创建管线
  const polygonLine = new THING.PolygonLine({
    parent: car1,
    selfPoints: points,
    localPosition: [0, 3, -5],
    closure: true,
  })

  polygonLine.style.color = 'green'

  // 创建导航线
  const routeLine = new THING.RouteLine({
    parent: car1,
    selfPoints: points,
    localPosition: [0, 5, -10],
    closure: true,
    style: {
      color: 'red',
    },
  })
}
