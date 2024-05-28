import { Divider, LinearProgress, linearProgressClasses } from "@mui/material";

import "./styles.css";
import formatNumber from "../../utils/formatNumber";

interface IPokemonStatusBarProps {
  name: string;
  statValue: number;
  maxStatValue: number;
  pokemonType: string;

}
export function PokemonStatusBar({ name, statValue, pokemonType, maxStatValue }: IPokemonStatusBarProps) {
  // MIN = Minimum expected value
  const min = 0;
  // MAX = Maximum expected value
  const max = maxStatValue;
  // Function to normalise the values (MIN / MAX could be integrated)
  // The linear fragment works by default with the range 0 to 100.
  // This function changes it to 0 to 999.
  const normalise = (value: number) => ((value - min) * 100 / (max - min));

  return (
    <div className="statContainer">
      <p
        className="statName"
        style={{ color: `var(--color-poketype-${pokemonType})` }}
      >
        {name}
      </p>
      <Divider orientation="vertical" />
      <p className="statValue">{formatNumber(statValue, 3)}</p>
      <LinearProgress
        variant="determinate"
        value={normalise(statValue)}
        className="statBar"
        sx={{
          [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: "#B8B8B8",
          },
          [`& .${linearProgressClasses.bar}`]: {
            backgroundColor: `var(--color-poketype-${pokemonType})`
          },
        }}
      />
    </div>
  )
}