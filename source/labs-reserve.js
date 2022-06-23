import firebase from "./firebase-config";
import { getDatabase, ref, push, get } from "firebase/database";

const db = getDatabase();

async function getReservesToday() {
  const reservesToday = new Array();

  const reserveRef = ref(db, "reserves");
  await get(reserveRef).then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      childSnapshot.forEach((reserve) => {
        console.log(reserve.val());
        const reserveToday = reserve.val();

        var partesData = reserveToday.date.split("/");
        var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);

        if ((data = new Date())) {
          reservesToday.push(reserveToday);
        }
      });
    });
  });

  return reservesToday;
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

      console.log(reserve);
    });
  });

  return reserves;
}

async function getReserveSolicitations() {
  const reserveSolicitations = new Array();

  const reserveRef = ref(db, "reserves/solicitation");
  await get(reserveRef).then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      reserveSolicitations.push(childSnapshot.val());
    });
  });

  console.log(reserveSolicitations);
  return reserveSolicitations;
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

async function registerReserveSolicitation(userUid, reserve) {
  const reserveSolicitationRef = ref(db, "reserves/solicitation");

  await push(reserveSolicitationRef, {
    userUid: userUid,
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
  registerReserveSolicitation,
  getUserReserves,
  getReserveSolicitations,
  getReservesToday,
};
