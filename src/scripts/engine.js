const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    if (!clickedKey) return;

    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();
    if (mapedKeys.includes(key)) {
        playTune(key);
    }
});

const handleVolume = (e) => {
    // se seu input for de 0 a 1, deixa assim:
    audio.volume = e.target.value;
    // se for de 0 a 100, troque para:
    // audio.volume = e.target.value / 100;
};

const showHidekKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
};

volumeSlider.addEventListener("input", handleVolume);
keysCheck.addEventListener("click", showHidekKeys);
