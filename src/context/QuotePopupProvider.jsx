import { useState, useMemo, useCallback } from "react";
import QuotePopupContext from "./QuotePopupContext";

export default function QuotePopupProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = useCallback(() => setIsOpen(true), []);
  const closePopup = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openPopup, closePopup }),
    [isOpen, openPopup, closePopup]
  );

  return (
    <QuotePopupContext.Provider value={value}>
      {children}
    </QuotePopupContext.Provider>
  );
}
