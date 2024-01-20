"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

// Validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Email is not valid")
    .required("This field is required"),
  message: Yup.string().required("This field is required"),
});

const ContactForm = () => {
  const [resultMessage, setResultMessage] = useState("");

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        // Make a POST request to your serverless function
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        console.log(JSON.stringify(values));
        if (response.ok) {
          // Reset the form and display a success message
          formik.resetForm();
          setResultMessage("Your message was sent successfully!");
        } else {
          // Handle error cases
          setResultMessage("Failed to send message. Please try again.");
        }
      } catch (error) {
        console.error(error);
        setResultMessage("An unexpected error occurred. Please try again.");
      }
    },
  });

  return (
    <div className="contact__wrap">
      <h2>Or use form below:</h2>
      <form className="contact__from" onSubmit={formik.handleSubmit}>
        <div className="contact__left">
          <div className="input-wrap ">
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="Name"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="input-wrap">
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>

        <div className="contact__right input-wrap">
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            placeholder="Message"
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="error">{formik.errors.message}</div>
          ) : null}
        </div>

        <div className="form-last">
          {/* Submit Button */}
          <button type="submit">Submit</button>

          {/* Display Result Message */}
          {resultMessage && <div className="succes">{resultMessage}</div>}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
