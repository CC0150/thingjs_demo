import { getThingApp } from '@/thing'

export function bindBuildingClick() {
  const thingApp = getThingApp()
  const building = thingApp.query('.Building')[0]
  if (!building) {
    return
  }

  building.on(
    'click',
    () => {
      thingApp.query('buildingLabel')[0]?.destroy()

      new THING.Label({
        name: 'buildingLabel',
        parent: building,
        fontText: building.name,
        fontSize: 24,
        style: {
          color: 'red',
        },
        localPosition: [0, building.boundingBox.size[1] + 5, 0],
        renderType: THING.RenderType.Plane,
      })
      console.log(building.boundingBox.size)
    },
    'buildingClick',
  )
}

export function unBindBuildingClick() {
  const thingApp = getThingApp()
  const building = thingApp.query('.Building')[0]
  if (!building) {
    return
  }

  building.off('click', null, 'buildingClick')
}
