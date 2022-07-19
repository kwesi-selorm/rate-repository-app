// import { useMutation } from "@apollo/client";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import * as yup from "yup";
import FormikTextInput from "../components/FormikTextInput";
import Text from "../components/Text";
import { useSignIn } from "../hooks/useSignIn";
import theme from "../theme";

export const LoginForm = ({ onSubmit, formStyle, buttonStyle, errors }) => {
  function checkForErrors(errors) {
    if (!errors) return false;
    for (let e in errors) {
      if (e === true) return true;
    }
    return false;
  }

  return (
    <View style={formStyle}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" />
      <Pressable disabled={checkForErrors(errors)} onPress={onSubmit}>
        <Text style={buttonStyle} fontWeight="bold">
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

//Main sign in component
const SignIn = () => {
  const initialValues = { username: "eljaks", password: "testpwd" }; //jadorkor, password
  const [token, setToken] = useState();
  const [signIn, result] = useSignIn();

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(4, "Username must be more than 4 characters")
      .required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  /* Implement authentication on form submission and retrieve returned access token. Apply optional chaining for async data */
  const onSubmit = async (values) => {
    try {
      await signIn(values);
      if (result.loading) return "Loading...";
    } catch (error) {
      console.log(error.message);
    }
  };

  //Watch changes in result, possibly loading changing from true to false, and data changing from undefined to finite
  useEffect(() => {
    setToken(result?.data?.authenticate?.accessToken);
    console.log(token);
  }, [result]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, errors }) => {
        return (
          <LoginForm
            formStyle={styles.form}
            buttonStyle={styles.submitButton}
            onSubmit={handleSubmit}
            errors={errors}
          />
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: { backgroundColor: theme.colors.white, padding: 15 },
  submitButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    color: theme.colors.white,
    marginTop: 10,
    paddingVertical: 15,
    textAlign: "center",
  },
});

export default SignIn;
