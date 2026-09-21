import { changeColor, resetColor } from './useChangeColor'
import moveCar from './useMoveCar'
import driveCar from './useDriveCar'
import { resetScene, reset } from './useReset'
import scaleCar from './useScale'
import rotateCar from './useRotate'
import addImageMarker from './useAddImageMarker'
import addLabelMarker from './useAddLabelMarker'
import createBox from './useCreateBox'
import setImage from './useSetImage'
import setOpacity from './useSetOpacity'
import addHTMLMarker from './useAddHTMLMarker'
import changeView from './useChangeView'
import playAnimation from './usePlayAnimation'
import drawLine from './useDrawLine'
import { changeLevelToBuilding, goBackLevel } from './useChangeLevel'
import { bindBuildingClick } from './useBuildingClick'
import { bindFlagClick, unbindFlagClick, resetFlagClick } from './useFlagClick'

export {
  moveCar,
  addHTMLMarker,
  bindBuildingClick,
  changeColor,
  reset,
  addImageMarker,
  addLabelMarker,
  resetColor,
  driveCar,
  resetScene,
  scaleCar,
  rotateCar,
  createBox,
  setImage,
  setOpacity,
  changeView,
  playAnimation,
  drawLine,
  changeLevelToBuilding,
  goBackLevel,
  bindFlagClick,
  unbindFlagClick,
  resetFlagClick,
}
