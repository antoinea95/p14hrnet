import { useFormContext } from "react-hook-form";
import SelectInput from "./input/SelectInput";
import Text from "./input/Text";
import { department } from "../../utils/selectData";
import DatePicker from "./input/DatePicker";

export default function EmployeeForm({ control, errors }) {
  return (
    <section className="form-section">
      <h2 className="form-section_legend">Employee's information</h2>
      <div className="form-section_container">
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
        <SelectInput
          name="department"
          label="Department"
          control={control}
          errors={errors}
          data={department}
        />
      </div>
    </section>
  );
}
