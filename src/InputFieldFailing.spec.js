import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import InputField from "./InputField";
import { Formik } from "formik";

test("should have validation error given input field is touched and error exists on form", () => {
  const fieldName = "firstName";
  const labelName = "First Name";
  render(
    <Formik
      validate={(values) => {
        let errors = {};

        if (!values?.firstName) {
          errors.firstName = "Required.";
        }

        return errors;
      }}
    >
      <InputField fieldName={fieldName} labelName={labelName} />
    </Formik>
  );

  const input = screen.getByLabelText(labelName);

  // Call blur without inputting anything which should trigger a validation error
  fireEvent.blur(input);

  const validationErrors = screen.getByTestId(`errors-${fieldName}`);

  expect(validationErrors.innerHTML).toBe("Required.");
});
