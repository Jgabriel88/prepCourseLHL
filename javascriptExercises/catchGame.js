/*
 * Programming Quiz: Murder Mystery (3-4)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variables - `room`, `suspect`, `weapon`, and `solved`
 * 2. Your code should include a conditional statement
 * 3. The variable `suspect` should use one of the provided values
 * 4. The variable `weapon` should be based on the `room`
 * 5. Your code should produce the expected output: __________ did it in the __________ with the __________!
 * Example: Mr. Parkes did it in the dining room with the knife!
 *
 * 6. For unmatching combination of the suspect and the room, print nothing on the console
 */

/* ****************************************** */
/* TESTING LOGIC */
// Change the value of `room` and `suspect` to test your code

// A room can be either of - dining room, gallery, ballroom, or billiards room

let room = "ballroom";
let suspect = "Mr. Kalehoff";
let weapon = "";
let solved = false;

if (room === 'dining room') {
  weapon = 'knife';
  if (suspect === 'Mr. Parkes') {
    solved = true;
  }

} else if (room === 'gallery') {
  weapon = 'trophy';
  if (suspect === 'Ms. Van Cleve') {
    solved = true;
  }

} else if (room === 'billiards room') {
  weapon = 'pool stick';
  if (suspect === 'Mrs. Sparr') {
    solved = true;

  }
} else if (room = 'ballroom') {
  weapon = 'poison';
  if (suspect === 'Mr. Kalehoff') {
    solved = true;
  }

}

if (solved) {
  console.log(`${suspect} did it in the ${room} with the ${weapon}`)
} else { console.log('You did not find the suspect') }
