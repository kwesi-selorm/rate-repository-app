import { Formik } from "formik";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import FormikTextInput from "../components/FormikTextInput";
import Text from "../components/Text";
import theme from "../theme";

export const LoginForm = ({ onSubmit, formStyle, buttonStyle }) => {
  return (
    <View style={formStyle}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" />
      <Pressable onPress={onSubmit}>
        <Text style={buttonStyle} fontWeight="bold">
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const initialValues = { username: "", password: "" };
  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => {
        return (
          <LoginForm
            formStyle={styles.form}
            buttonStyle={styles.submitButton}
            onSubmit={handleSubmit}
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
