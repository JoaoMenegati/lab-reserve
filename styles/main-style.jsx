import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },

  input: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  label: {
    fontSize: 28,
    color: "000",
  },

  button: {
    height: 40,
    width: 250,
  },

  alinharCampos: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  inputCampoMenor: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 114,
    margin: 12,
    borderWidth: 1,
    padding: 5,
  },

  textLembrar: {
    fontSize: 20,
    color: "red",
  },
});

export default Styles;
