import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  errorInput: {
    borderColor: "#d73a4a",
    borderStyle: "solid",
    borderWidth: 2,
  },
});

const TextInput = ({ style, error, name, ...props }) => {
  const textInputStyle = [style, error && styles.errorInput];

  return (
    <NativeTextInput
      secureTextEntry={name === "password" && true}
      style={textInputStyle}
      {...props}
    />
  );
};

export default TextInput;
