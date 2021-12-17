import { FSM } from "../fsm/FSM";
import { useFSM } from "../hooks/useFSM";
import { FSMEvent } from "../models/FSMEvent";
import { FSMState } from "../models/FSMState";

const fsm = new FSM(FSMState.get(FSMState.Type.WAIT_PRODUCT_SCAN));

export const FSMPage = () => {
  const { state, send } = useFSM(fsm);

  return (
    <div>
      <div>State: {state.type}</div>
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
        <button onClick={() => send(new FSMEvent(FSMEvent.Type.PRODUCT_FOUND))}>
          Product found
        </button>
        <button
          onClick={() => send(new FSMEvent(FSMEvent.Type.QUANTITY_ENTERED))}
        >
          Quantity entered
        </button>
        <button
          onClick={() => send(new FSMEvent(FSMEvent.Type.QUANTITY_UPDATED))}
        >
          Quantity updated
        </button>
      </div>
    </div>
  );
};
