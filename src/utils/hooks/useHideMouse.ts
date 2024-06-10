import { useEffect } from "react";

import { setHidden, useAppDispatch } from "@/store/global";

export const useHideMouse = (hidden: boolean) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setHidden(hidden));
  }, [hidden]);
};
