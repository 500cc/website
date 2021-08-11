let lights = new Array(6).fill(0).map(() => new Array(6).fill(0).map(() => Math.random() <= 0.5));
window.onload = init;

function init() {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            setLight(i, j, lights[i][j])
        }
    }
}

function setLight(i, j, light) {
    document.getElementById("light" + i + j).checked = lights[i][j] = light;
}

function reverseLights(i, j) {
    lights[i][j] = !lights[i][j]
    if (i > 0) reverseLight(i - 1, j);
    if (i < 5) reverseLight(i + 1, j);
    if (j > 0) reverseLight(i, j - 1);
    if (j < 5) reverseLight(i, j + 1);

    if (isAllCleared()) {
        document.getElementById("message").innerText = "やるやん"
    }
}

function reverseLight(i, j) {
    setLight(i, j, !lights[i][j])
}

function isAllCleared() {
    return lights.every(row => row.every(x => x == false))
}