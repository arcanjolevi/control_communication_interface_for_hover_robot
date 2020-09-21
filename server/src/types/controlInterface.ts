interface Control {
  limit: number;
  lightOn: boolean;
  autoMode: boolean;
  powerA: boolean;
  steer: number;
  speed: number;
}

export const controlDefaultParams: Control = {
  limit: 0,
  lightOn: false,
  autoMode: false,
  powerA: false,
  steer: 0,
  speed: 0,
};

export default Control;
