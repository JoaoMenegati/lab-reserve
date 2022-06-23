import { StyleSheet } from "react-native";

const ReserveViewStyle = StyleSheet.create({
  title: {
    padding: 26,
    fontSize: 26,
  },

  headerListRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
  },

  listComponent: {
    flex: 3,
    margin: 3,
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 12,
  },

  list: {
    flex: 1,
    borderRadius: 12,
    marginTop: 5,
    marginBottom: 5,
  },

  buttonContainer: {
    margin: 16,
  },
});

export default ReserveViewStyle;
