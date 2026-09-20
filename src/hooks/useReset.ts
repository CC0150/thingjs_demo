import { resetDriveCar } from './useDriveCar'
import { resetColor } from './useChangeColor'
import { resetImageMarker } from './useAddImageMarker'
import { resetBox } from './useCreateBox'
import { resetImage } from './useSetImage'
import { resetOpacity } from './useSetOpacity'
import { resetFlyToLocation } from './useFlyToLocation'
import { resetAnimation } from './usePlayAnimation'
import { resetLabelMarker } from './useAddLabelMarker'
import { resetHTMLMarker } from './useAddHTMLMarker'
import { resetView } from './useChangeView'

/** 重置所有状态 */
export function reset() {
  resetOpacity()
  resetDriveCar()
  resetColor()
  resetLabelMarker()
  resetImageMarker()
  resetView()
  resetImage()
  resetHTMLMarker()
  resetAnimation()
  resetBox()
}

export async function resetScene() {
  reset()
  const locationOptions = {
    position: [162.64985603989814, 29.6774697721321, 181.5000326501234],
    target: [165.04913966800245, 1.500981255502019, 120.6860038796044],
    time: 1500,
  }
  await resetFlyToLocation(locationOptions)
}
