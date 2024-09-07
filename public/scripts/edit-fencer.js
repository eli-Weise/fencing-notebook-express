const fencerController = require("controllers/fencerController");

const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const rating = document.querySelector("#rating");
const hand = document.querySelector("[name='hand']");
const grip = document.querySelector("[name='grip']");
const ratingYear = document.querySelector("#ry");
const height = document.querySelector("#height");
const notes = document.querySelector("#notes");
console.log("first call");

async function edit(id){
  console.log("works0");
  const fencer = await fencerController.getFencer(id);

  console.log("works1");

  firstName.value = fencer.firstname;
  lastName.value = fencer.lastname;
  rating.value = fencer.rating;
  ratingYear.value = fencer.year;
  hand.value = fencer.hand;
  grip.value = fencer.grip;
  height.value = fencer.height;
  notes.value = fencer.notes;
}