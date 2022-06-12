import firebase from "./firebase-config";
import { getDatabase, ref, push, get } from "firebase/database";

const db = getDatabase();

async function getUserReserves(userUid) {
  const reserves = new Array();

  const reserveRef = ref(db, "reserves/" + userUid);
  await get(reserveRef).then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      reserves.push(childSnapshot.val());
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
};
