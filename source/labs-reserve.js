import firebase from "./firebase-config";
import { getDatabase, ref, push, get } from "firebase/database";

const db = getDatabase();

async function getReservesToday() {
  const reservesToday = new Array();

  const reserveRef = ref(db, "reserves");
  await get(reserveRef).then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      childSnapshot.forEach((reserve) => {
        const reserveToday = reserve.val();

        var partesData = reserveToday.date.split("/");
        var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);

        if (data >= new Date()) {
          reservesToday.push(reserveToday);
        }
      });
    });
  });

  return reservesToday;
}

async function getReservesByLabs(lab) {
  const reservesToday = await getReservesToday();
  const reservesByLab = new Array();

  reservesToday.forEach((reserve) => {
    if (reserve.lab === lab) {
      reservesByLab.push(reserve);
    }
  });

  return reservesByLab;
}

async function getUserReserves(userUid) {
  const reserves = new Array();

  const reserveRef = ref(db, "reserves/" + userUid);
  await get(reserveRef).then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const reserve = childSnapshot.val();
      var partesData = reserve.date.split("/");
      var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);

      if (data >= new Date()) {
        reserves.push(reserve);
      }
    });
  });

  return reserves;
}

async function registerReserve(userUid, reserve) {
  const reserveRef = ref(db, "reserves/" + userUid);

  await push(reserveRef, {
    userName: reserve.userName,
    lab: reserve.lab,
    labName: reserve.labName,
    date: reserve.date,
    startHour: reserve.startHour,
    endHour: reserve.endHour,
    observation: reserve.observation,
  });
}

export {
  registerReserve,
  getUserReserves,
  getReservesToday,
  getReservesByLabs,
};
