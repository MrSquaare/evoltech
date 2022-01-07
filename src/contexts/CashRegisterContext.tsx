import { createContext, Dispatch, FC, SetStateAction, useState } from "react";

import { CashRegister } from "../models/CashRegister";

type CashRegisterContextValue = {
  cashRegister: CashRegister;
  setCashRegister: Dispatch<SetStateAction<CashRegister>>;
};

export const CashRegisterContext = createContext<CashRegisterContextValue>(
  null as any
);

type CashRegisterProviderProps = {
  cashRegister: CashRegister;
};

export const CashRegisterProvider: FC<CashRegisterProviderProps> = ({
  children,
  cashRegister,
}) => {
  const [state, setState] = useState(cashRegister);

  return (
    <CashRegisterContext.Provider
      value={{ cashRegister: state, setCashRegister: setState }}
    >
      {children}
    </CashRegisterContext.Provider>
  );
};
