import { Typography } from "@mui/material";
import { SearchBox, SelectControl } from "../";

export const SearchForMedication = () => {
  return (
    <>
      <Typography>
        <span>1.</span> Search for medication
      </Typography>
      <SearchBox />

      <SelectControl/>
      <SelectControl/>
      <SelectControl/>
      <SelectControl/>
    </>
  )
}
