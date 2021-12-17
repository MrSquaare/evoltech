import { useState } from "react";

import { FSM } from "../fsm/FSM";
import { FSMEvent } from "../models/FSMEvent";
import { FSMState } from "../models/FSMState";

type UseFSMReturnType = {
  state: FSMState;
  send: (event: FSMEvent, callback?: CallableFunction) => void;
};

export const useFSM = (fsm: FSM): UseFSMReturnType => {
  const [state, setState] = useState(fsm.state);

  const send = (event: FSMEvent, callback?: CallableFunction): void => {
    fsm.run(event, callback);

    setState(fsm.state);
  };

  return { state, send };
};
