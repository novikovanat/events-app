import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { postParticipant } from "../../js/fetch";
import { useParams } from "react-router-dom";

export default function EventRegistrationComponent() {
  const { eventId } = useParams();

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, "Too Short!")
      .max(18, "Too Long!")
      .required("Name is required!"),
    email: Yup.string().email().required("Email is required!"),
    dateOfBirth: Yup.date("Invalid date format!").required(
      "Date of birth is required!"
    ),
    source: Yup.string().required("Choose option"),
  });
  const handleSubmit = async (participant, actions) => {
    try {
      const newParticipant = await postParticipant(eventId, participant);
      return newParticipant;
    } catch (error) {
      console.log(error.ErrorMessage);
      actions.resetForm();
    }
  };

  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        dateOfBirth: "",
        source: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label>
          Full name
          <Field name="fullName" />
          <ErrorMessage name="fullName" component="span" />
        </label>

        <label>
          Email
          <Field name="email" />
          <ErrorMessage name="email" component="span" />
        </label>

        <label>
          Date of birth
          <Field name="dateOfBirth" />
          <ErrorMessage name="dateOfBirth" component="span" />
        </label>
        <label>
          Where did you here about this event?
          <label>
            Social media
            <Field type="radio" name="source" value="social media" />
          </label>
          <label>
            Friends
            <Field type="radio" name="source" value="friends" />
          </label>
          <label>
            Found myself
            <Field type="radio" name="source" value="found myself" />
          </label>
          <ErrorMessage name="source" component="span" />
        </label>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
