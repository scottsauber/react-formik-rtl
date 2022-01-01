import React from "react";
import { Field } from "formik";

const InputField = (props) => {
  return (
    <Field name={props.fieldName}>
      {({ field, form }) => (
        <div>
          <label htmlFor={props.fieldName}>{props.labelName}</label>
          <input {...field} id={props.fieldName} type="text" />
          {form.errors[props.fieldName] && form.touched[props.fieldName] ? (
            <div data-testid={`errors-${props.fieldName}`}>
              {form.errors[props.fieldName]}
            </div>
          ) : null}
        </div>
      )}
    </Field>
  );
};

export default InputField;
