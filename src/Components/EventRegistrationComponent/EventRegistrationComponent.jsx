import { Formik, Form, Field, ErrorMessage } from "formik";

export default function EventRegistrationComponent() {
  return (
    <Formik
      initialValues={{
        name: "",
        phoneNumber: "",
      }}
      // onSubmit={handleSubmit}
      // validationSchema={validationSchema}
    >
      <Form>
        <label>
          Full name
          <Field name="fullName" />
          <ErrorMessage name="fullName" component="span" />
        </label>

        <label>
          Email
          <Field name="Email" />
          <ErrorMessage name="Email" component="span" />
        </label>

        <label>
          Date of birth
          <Field name="dateOfBirth" />
          <ErrorMessage name="dateOfBirth" component="span" />
        </label>

        <label>
          <Field type="radio" name="source" value="social media" />
          Social media
        </label>
        <label>
          <Field type="radio" name="source" value="friends" />
          Friends
        </label>
        <label>
          <Field type="radio" name="source" value="found myself" />
          Found myself
        </label>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
