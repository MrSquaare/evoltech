import { FSMEvent } from "../models/FSMEvent";
import { FSMState } from "../models/FSMState";

export type FSMFlow = {
  fromStateType: FSMState.Type;
  toStateType: FSMState.Type;
  eventType: FSMEvent.Type;
};
