import { useContext } from "react";
import { CountryContext } from "../contexts/CountryContext";

export function useCountry() {
  const value = useContext(CountryContext)

  return value
}