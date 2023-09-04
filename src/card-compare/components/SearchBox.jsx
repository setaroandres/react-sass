import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";


export const SearchBox = () => {

  //Need to know where we are going to call this list
  const pharmacies = [
    {id: 1, label: 'Walgreens', address: 'Fake Str. 0709'},
    {id: 2, label: 'CVS', address: 'Fake Str. 2309'},
    {id: 3, label: 'Publix', address: 'Fake Str. 0702'},
    {id: 4, label: 'Target', address: 'Fake Str. 2411'}
  ];

  const [open, setOpen] = useState(false);

  const handleOpen = ({target}) => {

    target.value?.length >= 1
      ? setOpen(true)
      : setOpen(false)
  }

  return (
    <Autocomplete
      open={open}
      onInputChange={handleOpen}
      id="combo-box-demo"
      options={pharmacies.map((option) => option.label)}
      sx={{ width: '85%' }}
      renderInput={(params) => 
        <TextField {...params} label="Filter Pharmacy" />}
    />
  )
}
