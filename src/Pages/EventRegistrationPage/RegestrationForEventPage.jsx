import { Formik, Field } from "formik";
import * as Yup from "yup";
import { postParticipant } from "../../js/fetch";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Layout } from "../../GlobalStyles";
import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent.jsx";
import {
  StyledForm,
  ErrorMessageStyled,
  UlPadding,
  BlockElement,
  RadioInputs,
  LiFlex,
  RegisterButton
} from "./RegestrationForEventPage.styled.js";
export default function EventRegistrationComponent() {
  const { eventId } = useParams();
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, "Too Short!")
      .max(18, "Too Long!")
      .required("Name is required!"),
    email: Yup.string().email().required("Email is required!"),
    dateOfBirth: Yup.date("Invalid date format!")
      .min(7, "Date format must be dd.mm.yyyy")
      .required("Date of birth is required!"),
    source: Yup.string().required("Please select one of the options above"),
  });
  const handleSubmit = async (participant, actions) => {
    try {
      setLoading(true);
      const newParticipant = await postParticipant(eventId, participant);
      return newParticipant;
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
      actions.resetForm();
    }
  };

  return (
    <Layout>
      <NavigationComponent />
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
        <StyledForm>
          <label>
            Full name
            <BlockElement name="fullName" />
            <ErrorMessageStyled name="fullName" component="span" />
          </label>
          <label>
            Email
            <BlockElement name="email" />
            <ErrorMessageStyled name="email" component="span" />
          </label>
          <label>
            Date of birth
            <BlockElement name="dateOfBirth" />
            <ErrorMessageStyled name="dateOfBirth" component="span" />
          </label>
          <label>
            Where did you hear about this event?
            <UlPadding>
              <LiFlex>
                <label htmlFor="social media">Social media</label>
                <RadioInputs type="radio" name="source" value="social media" />
              </LiFlex>
              <LiFlex>
                <label htmlFor="friends">Friends</label>
                <RadioInputs type="radio" name="source" value="friends" />
              </LiFlex>
              <LiFlex>
                <label htmlFor="found myself">Found myself</label>
                <RadioInputs type="radio" name="source" value="found myself" />
              </LiFlex>
              <ErrorMessageStyled name="source" component="span" />
            </UlPadding>
          </label>
          <RegisterButton as="button" type="submit">
            Register
          </RegisterButton>
        </StyledForm>
      </Formik>
      {loading && <p>Looking for available seats..</p>}
    </Layout>
  );
}
