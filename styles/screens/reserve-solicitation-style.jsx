import { StyleSheet } from "react-native";

const ReserveSolicitationStyle = StyleSheet.create({
  title: {
    padding: 26,
    fontSize: 26,
  },

  headerListRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
  },

  list: {
    flex: 1,
    borderRadius: 12,
    marginTop: 5,
    marginBottom: 5,
  },

  buttonContainer: {
    margin: 8,
  },
});

export default ReserveSolicitationStyle;
