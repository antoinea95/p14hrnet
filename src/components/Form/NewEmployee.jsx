import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Text from "./input/Text";
import { Button } from "@mui/material";
import React from "react";
import DatePicker from "./input/DatePicker";
import Select from "./input/SelectInput";
import SelectInput from "./input/SelectInput";
import { department, states } from "../../utils/selectData";
import AdressForm from "./AdressForm";
import EmployeeForm from "./EmployeeForm";

export default function NewEmployee({setEmployees}) {

  // Create a yup schema
  const schema = yup.object().shape({
    firstname: yup.string().required("Enter a firstname please"),
    lastname: yup.string().required("Enter a lastname please"),
    dateofbirth: yup
      .date()
      .test("Birth Date", "Date must be valide", (value) => {
        return value;
      })
      .required("Enter a birth date please"),
    dateofstart: yup
      .date()
      .test("Start Date", "Date must be valid ", (value) => {
        return value;
      })
      .required("Enter a start date please"),
    department: yup
      .string()
      .label("department")
      .required("select a department please"),
    street: yup
    .string()
    .min(5, "Street must be at least 5 characters")
    .required("Enter a street name please"),
    city: yup
    .string()
    .required("Enter a city please"),
    states: yup
    .string()
    .required("Select a state please"),
    zip_code: yup
    .number("Enter a valid zip code")
    .min(5, "Enter a valid zip code")
    .required("Enter a zip code please")
  });

  // importing react useForm
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  // Converting date
  const convertDate = (date) => {

  if(date !== null) {
    const convertDate = new Date(date);
    const day = convertDate.getDate().toString().padStart(2, "0");
    const month = (convertDate.getMonth() + 1).toString().padStart(2, "0");
    const year = convertDate.getFullYear().toString();

    const UsExpiration = `${month}-${day}-${year}`
    return UsExpiration
  } else {
    return ""
  }
}

  const handleAddEmployee = (data) => {
    
    const formatEmployee = {
      ...data, 
      dateofbirth: convertDate(data.dateofbirth),
      dateofstart: convertDate(data.dateofstart)
    }

    setEmployees(prev => [...prev, formatEmployee]);
  };

  return (
    <article>
    <form onSubmit={handleSubmit(handleAddEmployee)} className="form">
      <h2 className="form-title"> Create an employee </h2>
      <div className="form-container">
      <EmployeeForm control={control} errors={errors} />
      <AdressForm control={control} errors={errors}/>
      </div>
      <Button type="submit" variant="contained" color="tertiary">Envoyer</Button>
    </form>
    </article>
  );
}
