import { useEffect, useState } from "react";
import { api } from "../services/products";

type State<T> = {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
};

export const useApi = <T>(source: string | Function) => {
  const [state, setState] = useState<State<T>>({
    data: undefined,
    isLoading: true,
    isError: false,
  });

  const loadData = async () => {
    try {
      if (typeof source === "string") {
        const response = await api.get<T>(source);
        setState({
          data: response.data,
          isLoading: false,
          isError: false,
        });
      } else {
        const response = await source();
        setState({
          data: response,
          isLoading: false,
          isError: false,
        });
      }
    } catch (error) {
      setState({
        data: undefined,
        isLoading: false,
        isError: true,
      });
      console.log({ error });
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return state;
};
