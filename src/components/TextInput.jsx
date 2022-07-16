import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  errorInput: {
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: 2,
  },
});

const TextInput = ({ style, error, name, ...props }) => {
  const textInputStyle = [error && styles.errorInput, style];

  return (
    <NativeTextInput
      secureTextEntry={name === "password" && true}
      style={textInputStyle}
      {...props}
    />
  );
};

export default TextInput;
