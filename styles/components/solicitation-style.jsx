import { StyleSheet } from "react-native";

const SolicitationStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 8,
    padding: 16,
    paddingTop: 4,
    paddingBottom: 4,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 6,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    height: 30,
    width: 30,
    borderRadius: 64,
  },

  column: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 4,
    paddingBottom: 4,
  },
});

export default SolicitationStyle;
