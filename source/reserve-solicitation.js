import firebase from "./firebase-config";
import { getDatabase, ref, push, get } from "firebase/database";

const db = getDatabase();

async function registerReserveSolicitation(userUid, reserve) {
  const reserveSolicitationRef = ref(db, "solicitation");

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

async function getReserveSolicitations() {
  const reserveSolicitations = new Array();

  const reserveRef = ref(db, "solicitation");
  await get(reserveRef).then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      reserveSolicitations.push(childSnapshot.val());
    });
  });

  console.log(reserveSolicitations);
  return reserveSolicitations;
}

export { registerReserveSolicitation, getReserveSolicitations };
