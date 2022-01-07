import { createContext, FC, useState } from "react";

import { FSM } from "../fsm/FSM";
import { CashRegister } from "../models/CashRegister";

type CashRegisterContextValue = {
  fsm: FSM;
  cashRegister: CashRegister;
  setCashRegister: (cashRegister: CashRegister) => void;
};

export const CashRegisterContext = createContext<CashRegisterContextValue>(
  null as any
);

type CashRegisterProviderProps = {
  fsm: FSM;
  cashRegister: CashRegister;
};

export const CashRegisterProvider: FC<CashRegisterProviderProps> = ({
  children,
  fsm,
  cashRegister,
}) => {
  const [state, setState] = useState(cashRegister);

  return (
    <CashRegisterContext.Provider
      value={{ fsm, cashRegister: state, setCashRegister: setState }}
    >
      {children}
    </CashRegisterContext.Provider>
  );
};
