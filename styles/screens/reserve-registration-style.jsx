import { StyleSheet } from "react-native";

const ReserveRegistrationStyle = StyleSheet.create({
  dateInput: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 114,
    margin: 12,
    borderWidth: 1,
    padding: 5,
  },

  dateContainer: {
    paddingBottom: 16,
    paddingTop: 16,
  },

  observationContainer: {
    paddingBottom: 40,
  },

  hourContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 16,
  },

  title: {
    fontSize: 26,
    paddingBottom: 55,
  },

  buttonContainer: {
    margin: 16,
  },
});

export default ReserveRegistrationStyle;
