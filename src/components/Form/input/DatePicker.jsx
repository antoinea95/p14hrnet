import { Controller } from "react-hook-form"
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react"
import dayjs from "dayjs";


export default function DatePicker({ name, label, control, errors, ...others }) {
   
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={dayjs(new Date())}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MuiDatePicker
                        label={label}
                        value={value}  // Set the value prop to the current value or null
                        onChange={(newValue) => {
                            onChange(newValue);  // Update the value using the onChange function
                        }}
                        error={error ? true : false}
                        slotProps={{
                            textField: {
                                helperText: error?.message
                            }
                        }}
                        {...others}
                        
                    />
                </LocalizationProvider>
            )}
        />
    );
}