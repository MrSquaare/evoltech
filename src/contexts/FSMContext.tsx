import { createContext, Dispatch, FC, SetStateAction, useState } from "react";

import { FSM } from "../fsm/FSM";

type FSMContextValue = {
  fsm: FSM;
  setFSM: Dispatch<SetStateAction<FSM>>;
};

export const FSMContext = createContext<FSMContextValue>(null as any);

type FSMProviderProps = {
  fsm: FSM;
};

export const FSMProvider: FC<FSMProviderProps> = ({ children, fsm }) => {
  const [state, setState] = useState(fsm);

  return (
    <FSMContext.Provider value={{ fsm: state, setFSM: setState }}>
      {children}
    </FSMContext.Provider>
  );
};
