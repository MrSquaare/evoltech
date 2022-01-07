import { useCallback, useContext } from "react";

import { FSMContext } from "../contexts/FSMContext";
import { FSM } from "../fsm/FSM";
import { FSMEvent } from "../models/FSMEvent";

type UseFSMReturnType = {
  fsm: FSM;
  send: (event: FSMEvent, callback?: CallableFunction) => void;
};

export const useFSM = (): UseFSMReturnType => {
  const { fsm, setFSM } = useContext(FSMContext);

  const send = useCallback(
    (event: FSMEvent, callback?: CallableFunction) => {
      setFSM((fsm) => {
        const prevState = fsm.state;
        fsm.run(event, callback);
        const currState = fsm.state;

        if (prevState !== currState) {
          return fsm.clone();
        }

        return fsm;
      });
    },
    [setFSM]
  );

  return { fsm, send };
};
