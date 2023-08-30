import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Text from "./input/Text";
import { Button } from "@mui/material";
import React from "react";
import DatePicker from "./input/DatePicker";
import Select from "./input/SelectInput";
import SelectInput from "./input/SelectInput";

export default function NewEmployee() {

const department = [
    {name: "Sales", value: "sales"},
    {name: "Marketing", value: "marketing"},
    {name: "Engineering", value: "engineering"},
    {name: "Human Resources", value: "human_resources"},
    {name: "Legal", value: "legal"},
]
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
        department: yup.string().oneOf(["sales", "marketing", "engineering", "human_resources", "legal"]).label("department").required("select a department please")
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

  const testform = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(testform)}>
      <Text
        name="firstname"
        label="Firstname"
        control={control}
        errors={errors}
      />
      <Text
        name="lastname"
        label="Lastname"
        control={control}
        errors={errors}
      />
      <DatePicker
        name="dateofbirth"
        label="Date of Birth"
        control={control}
        errors={errors}
      />
      <DatePicker
        name="dateofstart"
        label="Start Date"
        control={control}
        errors={errors}
      />
      <SelectInput name="department" label="Department" control={control} errors={errors} data={department} />

      <Button type="submit">Envoyer</Button>
    </form>
  );
}
