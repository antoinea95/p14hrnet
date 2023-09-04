import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import React from "react";

export default function Text({ name, label, control, errors, ...others }) {
  const error = errors[name];
  const errorMessage = error && error.message;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field} // Spread the field props to the TextField
          label={label}
          error={error ? true : false}
          helperText={errorMessage}
          {...others}
          size="small"
        />
      )}
    />
  );
}
