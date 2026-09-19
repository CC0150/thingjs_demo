declare interface Window {
  app: any;
  config: any;
  campusManagerIns: any;
  effectManagerIns: any;
  campusPlacementIns: any;
  createPointTwinIns: any;
  THREE: any;
  mapManagerIns: any;
  createLineTwinIns: any;
  createRegionTwinIns: any;
  campusTwinsManagerIns: any;
  campusMapManagerIns: any;
  THING: any;
  coreIns: any;
  [key: string]: any;
}

declare module '*';
declare module 'uuid';

declare type SceneModeType = '3D' | '2D';

// 相机插值接口
declare interface LerpFlyToArgs {
  position?: Array<number>;
  target: Array<number>;
  up?: Array<number>;
  duration?: number;
  delayTime?: number;
  distance?: number;
  horzAngle?: number;
  vertAngle?: number;
  lerpType?: Object;
  scale?: number;
  obj?: any; // 要聚焦的对象，用于视野检查
}

declare interface LerpEarthFlyToArgs {
  lonlat: Array<number>;
  duration?: number;
  height?: number;
  pitch?: number;
  heading?: number;
  directFly?: boolean;
}
