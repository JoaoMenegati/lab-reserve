const userTypeScreenMap = { 1: "MainTeacher", 2: "MainAdmin" };

export default function getMainScreen(userType) {
  return userTypeScreenMap[userType];
}
