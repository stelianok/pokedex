import { Divider, LinearProgress, linearProgressClasses } from "@mui/material";

import "./styles.css";

interface IPokemonStatusBarProps {
  name: string;
  statValue: number;
  maxStatValue: number;
  pokeType: string;

}
export function PokemonStatusBar({ name, statValue, pokeType, maxStatValue }: IPokemonStatusBarProps) {
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
        style={{ color: `var(--color-poketype-${pokeType})` }}
      >
        {name}
      </p>
      <Divider orientation="vertical" />
      <p className="statValue">{statValue}</p>
      <LinearProgress
        variant="determinate"
        value={normalise(statValue)}
        className="statBar"
        sx={{
          [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: "#B8B8B8",
          },
          [`& .${linearProgressClasses.bar}`]: {
            backgroundColor: `var(--color-poketype-${pokeType})`
          },
        }}
      />
    </div>
  )
}