"use strict"
let ABV = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
let text = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
const comfortaa = {
    А: {
        l: 2.806,
        el: 2
    },
    Б: {
        l: 3.123,
        el: 1
    },
    В: {
        l: 3.333,
        el: 1
    },
    Г: {
        l: 1.523,
        el: 1
    },
    Д: {
        l: 3.498,
        el: 2
    },
    Е: {
        l: 2.722,
        el: 2
    },
    Ё: {
        l: 2.823,
        el: 4
    },
    Ж: {
        l: 3.846,
        el: 5
    },
    З: {
        l: 2.209,
        el: 2
    },
    И: {
        l: 3.299,
        el: 1
    },
    Й: {
        l: 3.632,
        el: 2
    },
    К: {
        l: 2.450,
        el: 3
    },
    Л: {
        l: 2.224,
        el: 1
    },
    М: {
        l: 4.117,
        el: 1
    },
    Н: {
        l: 2.696,
        el: 3
    },
    О: {
        l: 3.147,
        el: 1
    },
    П: {
        l: 2.616,
        el: 1
    },
    Р: {
        l: 2.366,
        el: 1
    },
    С: {
        l: 2.262,
        el: 1
    },
    Т: {
        l: 1.788,
        el: 2
    },
    У: {
        l: 2.199,
        el: 3
    },
    Ф: {
        l: 3.551,
        el: 3
    },
    Х: {
        l: 2.435,
        el: 3
    },
    Ц: {
        l: 2.841,
        el: 2
    },
    Ч: {
        l: 2.111,
        el: 2
    },
    Ш: {
        l: 3.932,
        el: 2
    },
    Щ: {
        l: 4.251,
        el: 3
    },
    Ъ: {
        l: 2.749,
        el: 1
    },
    Ы: {
        l: 3.464,
        el: 2
    },
    Ь: {
        l: 2.462,
        el: 1
    },
    Э: {
        l: 2.828,
        el: 2
    },
    Ю: {
        l: 4.402,
        el: 3
    },
    Я: {
        l: 2.919,
        el: 2
    },
    а: {
        l: 2.225,
        el: 1
    },
    б: {
        l: 2.819,
        el: 1
    },
    в: {
        l: 2.504,
        el: 1
    },
    г: {
        l: 1.788,
        el: 1
    },
    д: {
        l: 3.082,
        el: 1
    },
    е: {
        l: 2.351,
        el: 1
    },
    ё: {
        l: 2.451,
        el: 3
    },
    ж: {
        l: 2.740,
        el: 5
    },
    з: {
        l: 1.487,
        el: 2
    },
    и: {
        l: 1.912,
        el: 2
    },
    й: {
        l: 2.243,
        el: 3
    },
    к: {
        l: 1.722,
        el: 3
    },
    л: {
        l: 1.524,
        el: 1
    },
    м: {
        l: 2.667,
        el: 1
    },
    н: {
        l: 1.912,
        el: 3
    },
    о: {
        l: 2.119,
        el: 1
    },
    п: {
        l: 1.912,
        el: 2
    },
    р: {
        l: 2.536,
        el: 1
    },
    с: {
        l: 1.517,
        el: 1
    },
    т: {
        l: 2.993,
        el: 3
    },
    у: {
        l: 1.787,
        el: 2
    },
    ф: {
        l: 3.582,
        el: 3
    },
    х: {
        l: 1.697,
        el: 3
    },
    ц: {
        l: 2.301,
        el: 2
    },
    ч: {
        l: 1.494,
        el: 2
    },
    ш: {
        l: 2.972,
        el: 3
    },
    щ: {
        l: 3.367,
        el: 3
    },
    ъ: {
        l: 1.977,
        el: 1
    },
    ы: {
        l: 2.436,
        el: 2
    },
    ь: {
        l: 1.794,
        el: 1
    },
    э: {
        l: 1.916,
        el: 2
    },
    ю: {
        l: 2.963,
        el: 3
    },
    я: {
        l: 2.168,
        el: 2
    },
    "@": {
        l: 6.148,
        el: 1
    },
    "$": {
        l: 3.509,
        el: 5
    },
    "#": {
        l: 3.442,
        el: 8
    },
    "!": {
        l: 0.818,
        el: 2
    },
    "?": {
        l: 1.481,
        el: 2
    },
    ",": {
        l: 0.055,
        el: 1
    },
    ".": {
        l: 0.055,
        el: 1
    },
    ":": {
        l: 0.11,
        el: 2
    },
    "_": {
        l: 0.677,
        el: 1
    },
    "-": {
        l: 0.331,
        el: 1
    },
    "#": {
        l: 3.470,
        el: 8
    },
    "№": {
        l: 5.064,
        el: 3
    },
    "+": {
        l: 1.112,
        el: 3
    },
    "=": {
        l: 1.000,
        el: 2
    },
    "%": {
        l: 4.2024,
        el: 3
    },
    A: {
        l: 2.806,
        el: 2
    },
    B: {
        l: 3.333,
        el: 1
    },
    C: {
        l: 2.262,
        el: 1
    },
    D: {
        l: 2.997,
        el: 1
    },
    E: {
        l: 2.722,
        el: 2
    },
    F: {
        l: 2.070,
        el: 2
    },
    G: {
        l: 2.794,
        el: 1
    },
    H: {
        l: 2.696,
        el: 3
    },
    I: {
        l: 1.000,
        el: 1
    },
    J: {
        l: 1.635,
        el: 1
    },
    K: {
        l: 2.450,
        el: 3
    },
    L: {
        l: 1.557,
        el: 1
    },
    M: {
        l: 4.117,
        el: 1
    },
    N: {
        l: 3.299,
        el: 1
    },
    O: {
        l: 3.147,
        el: 1
    },
    P: {
        l: 2.366,
        el: 1
    },
    Q: {
        l: 3.514,
        el: 2
    },
    R: {
        l: 2.919,
        el: 2
    },
    S: {
        l: 2.428,
        el: 1
    },
    T: {
        l: 1.788,
        el: 2
    },
    U: {
        l: 2.505,
        el: 1
    },
    V: {
        l: 2.208,
        el: 1
    },
    W: {
        l: 4.162,
        el: 1
    },
    X: {
        l: 2.435,
        el: 3
    },
    Y: {
        l: 1.789,
        el: 2
    },
    Z: {
        l: 2.822,
        el: 1
    },
    a: {
        l: 2.225,
        el: 1
    },
    b: {
        l: 2.536,
        el: 1
    },
    c: {
        l: 1.517,
        el: 1
    },
    d: {
        l: 2.536,
        el: 1
    },
    e: {
        l: 2.351,
        el: 1
    },
    f: {
        l: 1.508,
        el: 2
    },
    g: {
        l: 3.082,
        el: 1
    },
    h: {
        l: 2.219,
        el: 2
    },
    i: {
        l: 0.764,
        el: 2
    },
    j: {
        l: 1.235,
        el: 2
    },
    k: {
        l: 2.029,
        el: 3
    },
    l: {
        l: 1.089,
        el: 1
    },
    m: {
        l: 2.993,
        el: 3
    },
    n: {
        l: 1.912,
        el: 2
    },
    o: {
        l: 2.119,
        el: 1
    },
    p: {
        l: 2.536,
        el: 1
    },
    q: {
        l: 2.536,
        el: 1
    },
    r: {
        l: 1.186,
        el: 2
    },
    s: {
        l: 1.789,
        el: 1
    },
    t: {
        l: 1.437,
        el: 2
    },
    u: {
        l: 1.912,
        el: 2
    },
    v: {
        l: 1.495,
        el: 1
    },
    w: {
        l: 2.880,
        el: 1
    },
    x: {
        l: 1.697,
        el: 3
    },
    y: {
        l: 1.774,
        el: 2
    },
    z: {
        l: 1.903,
        el: 1
    },
    "1": {
        l: 1.193,
        el: 1
    },
    "2": {
        l: 2.321,
        el: 1
    },
    "3": {
        l: 2.205,
        el: 2
    },
    "4": {
        l: 2.513,
        el: 1
    },
    "5": {
        l: 2.523,
        el: 1
    },
    "6": {
        l: 2.356,
        el: 1
    },
    "7": {
        l: 1.673,
        el: 1
    },
    "8": {
        l: 3.142,
        el: 2
    },
    "9": {
        l: 2.356,
        el: 1
    },
    "0": {
        l: 2.523,
        el: 1
    },
};
const neonColors = {
    orange: "orange",
    pink: "rgb(255, 1, 221)",
    green: "#04ff00",
    red: 'red',
    white: 'white',
    blue: '#009aff'
}


const metrsText = document.querySelector(".m");
const els = document.querySelector(".el");
const workPrice = document.querySelector(".work");
const productWidth = document.querySelector('.product__width');
const productHeight = document.querySelector('.product__height');
const addNewString = document.querySelector(".addNewString");
const productBlock = document.querySelector(".product");
const price = document.querySelector(".client__new-price");
const oldPrice = document.querySelector(".client__old-price");
const productText = document.querySelector(".product__text");
const optPrice = document.querySelector(".optPrice");
const productInputs = document.querySelector('.parametrsInput');

createNewString()
addNewString.addEventListener('click', createNewString)

//Расчет длины
function calcWidth() {
    let width = productBlock.getBoundingClientRect().width
    return width
}

//Расчет стоимости
function calcPrice(elements, metrs, height, width) {
    // console.log(elements, metrs, height, width)
    let blockPrice = 0;
    if (metrs <= 2 && metrs > 0) {
        blockPrice = 1000
    } else if (metrs > 2 && metrs <= 10) {
        blockPrice = 2000
    } else if (metrs > 10 && metrs < 20) {
        blockPrice = 3000
    } else if (metrs > 20) {
        blockPrice = 5000
    } else {
        blockPrice = 0
        return 0
    }
    let result = Math.ceil((elements * 120 + metrs * 1000 + ((height / 100) * (width / 100)) * 6000 + blockPrice) / 100) * 100
    return result
}

function createNewString() {
    const neonString = createElement("div", "neonText");
    productText.appendChild(neonString);

    const neonStringParameters = createElement("div", "parametersItem")

    const textInput = createElement("input", "input__text");
    textInput.placeholder = "Введите текст";
    textInput.addEventListener('keydown', (e) => {
        if (!comfortaa[e.key] && e.key !== "Backspace" && e.key !== " ") {
            e.preventDefault();
        }
    })

    const heightInput = createElement("input", "input__height");
    heightInput.type = 'number';

    const palette = createColorPalette(neonColors, neonString);
    palette.addEventListener('click', (e) => {
        if (e.target.classList == "color") {
            let color = e.target.style.backgroundColor
            changeNeonColor(neonString, color)
        }
    })

    heightInput.addEventListener('input', (e) => {
        neonString.style.fontSize = `${+e.target.value * 4}px`;
        calc()
    })
    textInput.addEventListener('input', (e) => {
        neonString.textContent = e.target.value
        calc()
    })


    neonStringParameters.appendChild(textInput);
    neonStringParameters.appendChild(heightInput);
    neonStringParameters.appendChild(palette);
    productInputs.appendChild(neonStringParameters);
    if (productText.children.length != 1) {
        addSiblingTextStyles(neonString);
        heightInput.value = neonStringParameters.previousElementSibling.querySelector(".input__height").value;
    } else {
        heightInput.value = 10
        textInput.value = "HELLO!"
        neonString.textContent = textInput.value
    }
    calc()
}

function calc() {
    const textInputs = document.querySelectorAll('.input__text');

    let metrs = 0;
    let elements = 1;
    let height = 1;
    let width = Math.ceil(calcWidth() / 4);
    textInputs.forEach(el => {
        if (el.value) {
            let a = el.value.split('');
            for (let i = 0; i < a.length; i++) {
                if (comfortaa[a[i]]) {
                    metrs = metrs + comfortaa[a[i]].l * el.nextElementSibling.value;
                    elements = elements + comfortaa[a[i]].el
                }
            }
            height = height + +el.nextElementSibling.value + 1
        } 
    })
    productHeight.textContent = height + ' см'
    els.textContent = elements
    productWidth.textContent = width + ' см'
    metrsText.textContent = Math.ceil(metrs) / 100;
    optPrice.textContent = calcPrice(elements, Math.ceil(metrs) / 100, height, width)
    price.textContent = Math.ceil(calcPrice(elements, Math.ceil(metrs) / 100, height, width) * 1.2)
    oldPrice.textContent = Math.ceil(calcPrice(elements, Math.ceil(metrs) / 100, height, width) * 1.4)
}

function createElement(tag, elClass) {
    const el = document.createElement(tag);
    el.classList.add(elClass)
    return el
}

function addSiblingTextStyles(el) {
    if (el.previousElementSibling != undefined) {
        el.style.color = el.previousElementSibling.style.color;
        el.style.textShadow = el.previousElementSibling.style.textShadow;
        el.style.fontSize = el.previousElementSibling.style.fontSize
    } else {
        let colorCode = neonColors.orange;
        el.style.color = colorCode;
        el.style.textShadow = `0 0 10px ${colorCode},0 0 20px ${colorCode},0 0 30px ${colorCode},0 0 40px ${colorCode}`;
        el.style.fontSize = 10
    }
}

function createColorPalette(colorsPalette) {
    const palette = createElement("div", "colors")
    for (let color in colorsPalette) {
        const colorItem = createColorItem(colorsPalette[color])
        palette.appendChild(colorItem);
    }
    return palette
}

function createColorItem(color) {
    const colorItem = createElement("div", "color")
    colorItem.style.backgroundColor = color;
    return colorItem
}

function changeNeonColor(text, colorCode) {
    text.style.color = colorCode;
    text.style.textShadow = `0 0 10px ${colorCode},0 0 20px ${colorCode},0 0 30px ${colorCode},0 0 40px ${colorCode}`;
}