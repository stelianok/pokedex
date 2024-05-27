import { Chip } from "@mui/material";
interface IPokemonTypeChipProps {
  type: string;
}
export function PokemonTypeChip({ type }: IPokemonTypeChipProps) {
  return (
    <Chip
      label={type}
      style={{ backgroundColor: `var(--color-poketype-${type})` }}
      sx={{
        fontFamily: "Poppins",
        fontSize: "10px",
        fontWeight: "700",
        lineHeight: "16px",
        color: "#fff"
      }}
    />
  )
}