const name = "Kevin";
const age = 10;
const docent = "Draggan";

console.log("Mijn naam is " + name);
console.warn("Warn " + age);
console.warn("docent naam " + docent)

const date2 = new Date(2024, 7, 12, 10, 39, 5, 10)

console.log(new Date(1985, 6, 12)); // 12 juli 1985
console.log(new Date(1955, 8, 23)); // 23 september 1955
console.log(new Date(2015, 7, 31)); // 31 augustus 2015
console.log(new Date(1885, 0, 4)); // 4 januari 1885


let player = {
    name: "Erwin Henraat",
    jumpforce: 20,
    specialPower: "teleport",
    speed: 280,
    bike: "Honda VFR VTEC",
    livesLeft: 1,
    ammo: 121,
    numberOfLasers: 5,
    batteryPower: 90,
    level: 9000,
    wanted: true
};

for (let key in player) {
    console.log(`${key}: ${player[key]}`);
}

