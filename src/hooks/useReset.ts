import { resetDriveCar } from './useDriveCar'
import { resetColor } from './useChangeColor'
import { resetImageMarker } from './useAddMarker'
import { resetBox } from './useCreateBox'
import { resetImage } from './useSetImage'
import { resetFlyToLocation } from './useFlyToLocation'

/** 重置所有状态 */
export default function reset() {
  const locationOptions = {
    position: [161.9484124313557, 37.91501932636114, 199.27934447933853],
    target: [165.04913966800245, 1.500981255502019, 120.6860038796044],
    time: 1500,
  }

  resetDriveCar()
  resetColor()
  resetImageMarker()
  resetBox()
  resetImage()
  resetFlyToLocation(locationOptions)
}
