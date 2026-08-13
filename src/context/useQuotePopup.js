import { useContext } from "react";
import QuotePopupContext from "./QuotePopupContext";

export default function useQuotePopup() {
  const ctx = useContext(QuotePopupContext);
  if (!ctx) {
    throw new Error("useQuotePopup must be used within a QuotePopupProvider");
  }
  return ctx;
}
