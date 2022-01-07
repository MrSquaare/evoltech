import { FSMEvent } from "../models/FSMEvent";
import { FSMState } from "../models/FSMState";
import { FSMFlow } from "../types/flow";

const flows: FSMFlow[] = [
  {
    fromStateType: FSMState.Type.WAIT_PRODUCT_SCAN,
    toStateType: FSMState.Type.WAIT_PRODUCT_QUANTITY,
    eventType: FSMEvent.Type.PRODUCT_SCANNED,
  },
  {
    fromStateType: FSMState.Type.WAIT_PRODUCT_QUANTITY,
    toStateType: FSMState.Type.WAIT_PRODUCT_SCAN,
    eventType: FSMEvent.Type.QUANTITY_ENTERED,
  },
  {
    fromStateType: FSMState.Type.WAIT_PRODUCT_SCAN,
    toStateType: FSMState.Type.WAIT_PRODUCT_CODE,
    eventType: FSMEvent.Type.NUMBER_PRESSED,
  },
  {
    fromStateType: FSMState.Type.WAIT_PRODUCT_CODE,
    toStateType: FSMState.Type.FIND_PRODUCT,
    eventType: FSMEvent.Type.PRODUCT_CODE_ENTERED,
  },
  {
    fromStateType: FSMState.Type.FIND_PRODUCT,
    toStateType: FSMState.Type.WAIT_PRODUCT_QUANTITY,
    eventType: FSMEvent.Type.PRODUCT_ADDED,
  },
];

export class FSM {
  constructor(private _state: FSMState) {}

  get state() {
    return this._state;
  }

  run(event: FSMEvent, callback?: CallableFunction): void {
    for (const flow of flows) {
      this.checkState(
        FSMState.get(flow.fromStateType),
        FSMState.get(flow.toStateType),
        event.type === flow.eventType,
        callback
      );
    }
  }

  private checkState(
    fromState: FSMState,
    toState: FSMState,
    condition: boolean,
    callback?: CallableFunction
  ): boolean {
    const isValid = this._state === fromState && condition;

    if (isValid) {
      this._state = toState;

      callback && callback(this._state);
    }

    return isValid;
  }

  clone(): FSM {
    const clonedObj = Object.assign({}, this);

    Object.setPrototypeOf(clonedObj, Object.getPrototypeOf(this));

    return clonedObj;
  }
}
