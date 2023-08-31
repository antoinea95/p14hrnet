import React from 'react';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";

export default function SelectInput({ name, label, control, errors, data, ...others }) {
  return (
    <FormControl>
      <InputLabel htmlFor={name}>
        {label}
      </InputLabel>
      <Controller
        defaultValue={data[0].value}
        name={name}
        control={control} // Assurez-vous de passer correctement la prop control
        render={({ field, fieldState: error }) => (
          <>
          <Select {...field} label={label} id={name} size='small'>
            {data.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText error={true}> {error?.message}</FormHelperText>
          </>
        )}
      />
    </FormControl>
  );
}