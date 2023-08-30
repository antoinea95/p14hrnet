import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";

export default function SelectInput({ name, label, control, errors, data, ...others }) {
  return (
    <FormControl>
      <InputLabel htmlFor={name}>
        {label}
      </InputLabel>
      <Controller
        defaultValue=""
        name={name}
        control={control} // Assurez-vous de passer correctement la prop control
        render={({ field }) => (
          <Select {...field} label={label} id={name}>
            {data.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
}