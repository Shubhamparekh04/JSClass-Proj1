// Array prototyping to upload game array and all game name are convert Uppercase .

const gameNames = [
    "The Legend of Zelda: Breath of the Wild",
    "Minecraft",
    "Call of Duty: Modern Warfare II",
    "Elden Ring",
    "Fortnite",
    "Among Us",
    "Overwatch 2",
    "Cyberpunk 2077",
    "God of War: Ragnarok",
    "Apex Legends"
];

function Upper() { }

Upper.prototype.doUpper = function (arr) {
    this.final = arr.map(e => e.toUpperCase());
    console.log(this.final);
}

let a = new Upper();

a.doUpper(gameNames);