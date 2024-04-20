let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distToMarsKm = 225000000;
let distToMoonKm = 384400;
const milesPerKm = 0.621;

//Print out the type of each variable
console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distToMarsKm);
console.log(typeof distToMoonKm);
console.log(typeof milesPerKm);

// Calculate a space mission below
let milesToMars = distToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;


// Print the results of the space mission calculations below
console.log(shuttleName + ' will take '+ daysToMars + ' days to reach Mars.');

// Calculate a trip to the moon below
let milesToMoon = distToMoonKm * milesPerKm;
let hoursToMoon = milesToMoon/ shuttleSpeedMph;
let daysToMoon = hoursToMoon/ 24;

// Print the results of the trip to the moon below
console.log(shuttleName + ' will take '+ daysToMoon + ' days to reach the Moon.');