import { getThingApp } from '@/thing'

export default function moveCar() {
  const thingApp = getThingApp()
  const car1 = thingApp.query('car1')[0]

  const [x, y, z] = car1.position

  thingApp.camera.flyTo({
    position: [165.39041463577388, 42.139375085710334, 148.59574100586127],
    target: [165.04913966800245, 1.500981255502019, 120.6860038796044],
    time: 1500,
    onComplete: () => {
      car1.rotateTo([0, car1.rotation[1] - 90, 0], {
        time: 1000,
        onComplete: () => {
          car1.moveTo([x - 15, y, z], {
            loopType: THING.LoopType.PingPong,
            times: 2,
            onComplete: () => {
              car1.rotation = [0, 0, 0]
            },
          })
        },
      })
    },
  })
}
