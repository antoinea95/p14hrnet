import { useFormContext } from "react-hook-form";
import SelectInput from "./input/SelectInput";
import Text from "./input/Text";
import { states } from "../../utils/selectData";

export default function AdressForm({control, errors}) {

  return (
    <section className="form-section">
      <h2 className="form-section_legend">Employee's Adress</h2>
      <div className="form-section_container">
        <Text name="street" label="Street" control={control} errors={errors} />
        <Text name="city" label="City" control={control} errors={errors} />
        <SelectInput
          name="states"
          label="States"
          control={control}
          errors={errors}
          data={states}
        />
        <Text
          name="zip_code"
          label="Zip code"
          control={control}
          errors={errors}
        />
      </div>
    </section>
  );
}
