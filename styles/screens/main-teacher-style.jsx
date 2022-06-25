import { StyleSheet } from "react-native";

const MainTeacherStyle = StyleSheet.create({
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
    width: 330,
  },

  imageContainer: {
    height: 40,
    width: 40,
    borderRadius: 64,
    alignSelf: "flex-end",
    marginRight: 10,
  },

  image: {
    height: 40,
    width: 40,
    borderRadius: 64,
  },

  list: {
    flex: 1,
    borderRadius: 12,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default MainTeacherStyle;
