import { useCallback, useEffect } from "react";

type UseLoginArgs = {
  guard: (isLogged: boolean) => void;
};

type UseLoginReturnType = {
  setLogged: (isLogged: boolean) => void;
};

export const useLogin = (args: UseLoginArgs): UseLoginReturnType => {
  const { guard: cb } = args;

  const setLogged = useCallback((isLogged: boolean) => {
    localStorage.setItem("isLogged", isLogged ? "true" : "false");
  }, []);

  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged") === "true";

    cb(isLogged);
  }, [cb]);

  return { setLogged };
};
