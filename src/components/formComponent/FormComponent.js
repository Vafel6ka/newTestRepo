import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";
import "./formComponent.scss";

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string()
    .min(10, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
});

const FormComponent = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    console.log("FormComponent");
    axios
      .get(
        "http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json"
      )
      .then(function (response) {
        // handle success
        console.log(response.data.dataseries);
      })
      .catch(function (error) {
        // handle error
        console.log(`error`, error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <div className="container">
      <Formik
        initialValues={data}
        validationSchema={Schema}
        onSubmit={(values) => {
          // same shape as initial values
          setData(JSON.stringify(values, null, 2));
          console.log(data);
        }}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <Field name="name" placeholder="Select Group (Just one)" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="message" />
            {errors.message && touched.message ? (
              <div>{errors.message}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormComponent;
