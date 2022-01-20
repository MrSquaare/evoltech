import { useEffect, useMemo, useState } from "react";

import { FSMProvider } from "../contexts/FSMContext";
import { FSM } from "../fsm/FSM";
import { useFSM } from "../hooks/useFSM";
import { FSMEvent } from "../models/FSMEvent";
import { FSMState } from "../models/FSMState";

const FSMPage = () => {
  const { fsm, send } = useFSM();
  const [states, setStates] = useState<FSMState[]>([]);

  useEffect(() => {
    setStates((states) => [...states, fsm.state]);
  }, [fsm]);

  return (
    <div>
      <div>
        Events:
        <button
          onClick={() => send(new FSMEvent(FSMEvent.Type.PRODUCT_SCANNED))}
        >
          Product scanned
        </button>
        <button
          onClick={() => send(new FSMEvent(FSMEvent.Type.NUMBER_PRESSED))}
        >
          Number pressed
        </button>
        <button
          onClick={() => send(new FSMEvent(FSMEvent.Type.PRODUCT_CODE_ENTERED))}
        >
          Product code entered
        </button>
        <button onClick={() => send(new FSMEvent(FSMEvent.Type.PRODUCT_ADDED))}>
          Product added
        </button>
        <button
          onClick={() => send(new FSMEvent(FSMEvent.Type.QUANTITY_ENTERED))}
        >
          Quantity entered
        </button>
      </div>
      <div>Current state: {fsm.state.type}</div>
      <div>
        States:{" "}
        {states.map((state, index) => (
          <div key={index}>{state.type}</div>
        ))}
      </div>
    </div>
  );
};

const FSMPageWithProviders = () => {
  const initState = useMemo(
    () => FSMState.get(FSMState.Type.WAIT_PRODUCT_SCAN),
    []
  );
  const fsm = useMemo(() => new FSM(initState), [initState]);

  return (
    <FSMProvider fsm={fsm}>
      <FSMPage />
    </FSMProvider>
  );
};

export default FSMPageWithProviders;
