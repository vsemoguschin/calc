"use strict"
let ABV = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
let text = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
const comfortaa = {
    А: {
        l: 2.806,
        el: 2,
        step: 200,
        getLetter(x) {
            return `<path class="cls-1" d="M${5.91 + x},243.61l68-187.76c5.8-16,26.12-16.19,32.16-.3l71.5,188.06"/><line class="cls-1" x1="${32.45 + x}" y1="181.41" x2="${147.55 + x}" y2="181.41"/>`;
        }
    },
    Б: {
        l: 3.123,
        el: 1,
        step: 165,
        getLetter(x) {
            return `<path class="cls-1" d="M${135.33 + x},43.74H${34 + x}A18.66,18.66,0,0,0,${15.91 + x},62.4V225a18.65,18.65,0,0,0,18.66,18.66h59.3a49.76,49.76,0,0,0,49.76-49.76V181.41a49.76,49.76,0,0,0-49.76-49.76h-73" />`;
        }
    },
    В: {
        l: 3.333,
        el: 1,
        step: 156,
        getLetter(x) {
            return `<path class="cls-1" d="M${30.6 + x},135h59.7c26.6,0,48.1,21.5,48.1,48.1v12.4c0,26.6-21.5,48.1-48.1,48.1H${40.1 + x}c-10.3,0-18.7-8.4-18.7-18.7V62.4c0-10.3,8.4-18.7,18.7-18.7h49.6c20.5,0,37.1,16.6,37.1,37.1v14.9c0,15.2-9.2,28.8-23.2,34.5l-3.3,1.3" />`;
        }
    },
    Г: {
        l: 1.523,
        el: 1,
        step: 164,
        getLetter(x) {
            return `<path class="cls-1" d="M${20 + x},250.7V69.6c0-10.4,8.4-18.8,18.8-18.8h93.2" />`;
        }
    },
    Д: {
        l: 3.498,
        el: 2,
        step: 214,
        getLetter(x) {
            return `<path class="cls-1" d="M${32.2 + x},247.9l54.1-186.4c5.5-17.9,30-18.1,35.7-0.3l56.9,186.6" /><path class="cls-1" d="M${199.7 + x},292.2v-25.7c0-10.3-8.3-18.6-18.6-18.6h-151c-10.3,0-18.6,8.3-18.6,18.6v25.7"/>`;
        }
    },
    Е: {
        l: 2.722,
        el: 2,
        step: 182,
        getLetter(x) {
            return `<path class="cls-1" d="M${150.9 + x},43.9H${35.4 + x}c-10.4,0-18.8,8.4-18.8,18.8V225c0,10.4,8.4,18.8,18.8,18.8h115.5" /><line class="cls-1" x1="${111.9 + x}" y1="146.8" x2="${21.3 + x}" y2="146.8"/>`;
        }
    },
    Ё: {
        l: 2.823,
        el: 4,
        step: 182,
        getLetter(x) {
            return `<path class="cls-1" d="M${150.9 + x},43.9H${35.4 + x}c-10.4,0-18.8,8.4-18.8,18.8V225c0,10.4,8.4,18.8,18.8,18.8h115.5" /><line class="cls-1" x1="${111.9 + x}" y1="146.8" x2="${21.3 + x}" y2="146.8"/><line class="cls-1" x1="${63.8 + x}" y1="8.5" x2="${63.8 + x}" y2="18.5"/><line class="cls-1" x1="${125.4 + x}" y1="8.5" x2="${125.4 + x}" y2="18.5"/>`;
        }
    },
    Ж: {
        l: 3.846,
        el: 5,
        step: 270,
        getLetter(x) {
            return `<path class="cls-1" d="M${245.8 + x},50.8l-45.7,65.5c-13.3,19.1-35.1,30.4-58.4,30.4h-7.6c-22.3,0-43.3-10.5-56.8-28.3L${26.3 + x},50.8" />
        <line class="cls-1" x1="${20.3 + x}" y1="250.7" x2="${101.5 + x}" y2="143.4" />
        <line class="cls-1" x1="${256.9 + x}" y1="250.7" x2="${175.6 + x}" y2="143.4" />
        <line class="cls-1" x1="${138.6 + x}" y1="50.8" x2="${138.6 + x}" y2="146.8" />
        <line class="cls-1" x1="${138.6 + x}" y1="154.8" x2="${138.6 + x}" y2="250.7" />`;
        }
    },
    З: {
        l: 2.209,
        el: 2,
        step: 147,
        getLetter(x) {
            return `<path class="cls-1" d="M${16.7 + x},213c10.6,17.6,31.6,29.7,55.8,29.7c34.8,0,63-24.9,63-55.6s-28.2-55.6-63-55.6" /><path class="cls-1" d="M${110.6 + x},135.4c2.3-2.7,19.3-22.8,13.8-48.5c-5.5-25.7-30.6-43.1-55.8-44.1c-30.9-1.3-50,22.4-51.9,24.8" />`;
        }
    },
    И: {
        l: 3.299,
        el: 1,
        step: 195,
        getLetter(x) {
            return `<path class="cls-1" d="M${20 + x},50.8V232c0,18.1,23.1,25.6,33.8,11l82.5-184.5c10.7-14.6,33.8-7.1,33.8,11v181.1" />`;
        }
    },
    Й: {
        l: 3.632,
        el: 2,
        step: 195,
        getLetter(x) {
            return `<path class="cls-1" d="M${20 + x},50.8V232c0,18.1,23.1,25.6,33.8,11l82.5-184.5c10.7-14.6,33.8-7.1,33.8,11v181.1" /><path class="cls-1" d="M${130 + x},8.5l-11.4,6.3c-12,6.6-26.5,6.6-38.4,0l-11.4-6.3" />`;
        }
    },
    К: {
        l: 2.450,
        el: 3,
        step: 168,
        getLetter(x) {
            return `<line class="cls-1" x1="${19.4 + x}" y1="43.7" x2="${19.4 + x}" y2="243.6" /><path class="cls-1" d="M${135 + x},43.7L${75 + x},121.8c-7.1,9.1-18,14.5-29.6,14.5h-21.5" /><line class="cls-1" x1="${144.7 + x}" y1="243.6" x2="${63.4 + x}" y2="136.4" />`;
        }
    },
    Л: {
        l: 2.224,
        el: 1,
        step: 210.65,
        getLetter(x) {
            return `<path class="cls-1" d="M${5.91 + x},243.61l68-187.76c5.8-16,26.12-16.19,32.16-.3l71.5,188.06"/>`;
        }
    },
    М: {
        l: 4.117,
        el: 1,
        step: 225.65,
        getLetter(x) {
            return `<path class="cls-1" d="M${21.7 + x},242.2V61.1c0-20.1,27.6-26.1,36.2-7.9l41.7,152.4c6.8,14.4,27.6,14.4,34.3-0.1l40.7-151.3c8.5-18.3,36.2-12.3,36.2,7.8v180.2" />`;
        }
    },
    Н: {
        l: 2.696,
        el: 3,
        step: 195,
        getLetter(x) {
            return `<line class="cls-1" x1="${18.5 + x}" y1="242.2" x2="${18.5 + x}" y2="42.3" /><line class="cls-1" x1="${165.6 + x}" y1="242.2" x2="${165.6 + x}" y2="42.3" /><line class="cls-1" x1="${22.9 + x}" y1="139.8" x2="${161.2 + x}" y2="139.8" />`;
        }
    },
    О: {
        l: 3.147,
        el: 1,
        step: 220,
        getLetter(x) {
            return `<circle class="cls-1" cx="${105.8 + x}" cy="150.8" r="99.9" />`;
        }
    },
    П: {
        l: 2.616,
        el: 1,
        step: 178,
        getLetter(x) {
            return `<path class="cls-1" d="M${15 + x},250.7V69.4c0-10.3,8.4-18.6,18.8-18.6h100.6c10.4,0,18.8,8.3,18.8,18.6v181.3" />`;
        }
    },
    Р: {
        l: 2.366,
        el: 1,
        step: 150,
        getLetter(x) {
            return `<path class="cls-1" d="M${15.5 + x},250.7V63c0-6.7,5.5-12.2,12.4-12.2H${75 + x}c27.9,0,50.6,22.4,50.6,50v17.5c0,27.6-22.6,50-50.6,50h-46.7" />`;
        }
    },
    С: {
        l: 2.262,
        el: 1,
        step: 210,
        getLetter(x) {
            return `<path class="cls-1" d="M${175.9 + x},71.8C${158.8 + x},58.2,${137.1 + x},50,${113.5 + x},50C${58.1 + x},50,${13.2 + x},95,${13.2 + x},150.4s44.9,100.3,100.3,100.3c24.1,0,46.2-8.5,63.5-22.6" />`;
        }
    },
    Т: {
        l: 1.788,
        el: 2,
        step: 210,
        getLetter(x) {
            return `<line class="cls-1" x1="${20.4 + x}" y1="50.8" x2="${180.7 + x}" y2="50.8" /><line class="cls-1" x1="${100.6 + x}" y1="250.7" x2="${100.6 + x}" y2="54.4" />`;
        }
    },
    У: {
        l: 2.199,
        el: 3,
        step: 210,
        getLetter(x) {
            return `<line class="cls-1" x1="${13.2 + x}" y1="50.8" x2="${101.3 + x}" y2="200.4" /><path class="cls-1" d="M${170.9 + x},50.8L${92 + x}.8,229c-2.4,5.4-6.1,10.1-10.8,13.7l0,0c-11.8,9.3-28.1,10.6-41.2,3.3l-8.1-4.5" />
            `;
        }
    },
    Ф: {
        l: 3.551,
        el: 3,
        step: 200,
        getLetter(x) {
            return `<line class="cls-1" x1="${98.1 + x}" y1="50.8" x2="${98.1 + x}" y2="250.7" />
            <path class="cls-1" d="M${98.1 + x},69.9c-47.6,0-86.3,33.8-86.3,75.5s38.6,75.5,86.3,75.5" />
            <path class="cls-1" d="M${98.1 + x},69.9c47.6,0,86.3,33.8,86.3,75.5s-38.6,75.5-86.3,75.5" />`;
        }
    },
    Х: {
        l: 2.435,
        el: 3,
        step: 200,
        getLetter(x) {
            return `<line class="cls-1" x1="${17.1 + x}" y1="50.8" x2="${165.6 + x}" y2="249.9" />
            <line class="cls-1" x1="${88 + x}" y1="154.1" x2="${17.1 + x}" y2="249.9" />
            <line class="cls-1" x1="${165.6 + x}" y1="50.8" x2="${94.4 + x}" y2="145.4" />`;
        }
    },
    Ц: {
        l: 2.841,
        el: 2,
        step: 200,
        getLetter(x) {
            return `<path class="cls-1" d="M${20 + x},50.8v140.5c0,32.1,25.4,58.2,56.8,58.2h27.4h63c10.3,0,18.7,8.6,18.7,19.1V295" />
            <line class="cls-1" x1="${161 + x}" y1="50.8" x2="${161 + x}" y2="240.4" />`;
        }
    },
    Ч: {
        l: 2.111,
        el: 2,
        step: 180,
        getLetter(x) {
            return `<path class="cls-1" d="M${17.8 + x},50.8v61.4c0,31.1,25.3,56.4,56.4,56.4h71.3" />
            <line class="cls-1" x1="${150.5 + x}" y1="50.8" x2="${150.5 + x}" y2="250.7" />`;
        }
    },
    Ш: {
        l: 3.932,
        el: 2,
        step: 240,
        getLetter(x) {
            return `<path class="cls-1" d="M${12 + x},50.8v179.4c0,11.3,9.2,20.5,20.5,20.5h166.4c11.3,0,20.5-9.2,20.5-20.5V50.8" />
            <line class="cls-1" x1="${115.7 + x}" y1="50.8" x2="${115.7 + x}" y2="245.7" />`;
        }
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
        el: 2,
        getLetter(x) {
        }
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
        el: 3,
        getLetter(x) {
        }
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
        el: 1,
        getLetter(x) {
        }
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
        el: 1,
        getLetter(x) {
        }
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
    red: 'red',
    darkBlue: '#0034ff',
    green: "#04ff00",
    orange: "orange",
    blue: '#00aff6',
    pink: "rgb(255, 1, 221)",
    turquoise: '#00ffb9',
    white: 'white',
    warmWhite: '#fcf6ba'
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
const svgBlock = document.querySelector(".svgblok");


createNewString()
addNewString.addEventListener('click', createNewString)

//Расчет длины
function calcWidth() {
    let width = productBlock.getBoundingClientRect().width
    // console.log(width)
    return width

    //вернуть в px
    // productText.style.fontSize = `${+document.querySelector(".input__height").value * 4}px`;
    // console.log(+document.querySelector(".input__height").value * 4)
    // const pxWidth = productBlock.getBoundingClientRect().width
    // console.log(pxWidth)
    // productText.style.fontSize = "40px";
    // correctSizes()
    // return pxWidth
}

function correctSizes() {
    const heightInputs = document.querySelectorAll(".input__height");
    let minHeight = Infinity;
    heightInputs.forEach(el => {
        // console.log(el.value)
        if (+el.value < minHeight) {
            minHeight = el.value
        }
    })
    let cof = minHeight / 40
    console.log(cof)

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

function controlTextInput(key) {
    if (!comfortaa[key] && key !== "Backspace" && key !== " ") {
        return false
    } else return key
}

function createNewString() {
    const neonString = createElement("div", "neonText");
    productText.appendChild(neonString);

    const neonStringParameters = createElement("div", "parametersItem")

    const textInput = createElement("input", "input__text");
    textInput.placeholder = "Введите текст";
    textInput.addEventListener('keydown', (e) => {
        if (!controlTextInput(e.key)) {
            e.preventDefault()
        } else {
            controlTextInput()
        }
    })
    textInput.addEventListener('input', (e) => {
        neonString.textContent = e.target.value
        calc()
        makeSvg(textInput.value)
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

    const copyBtn = createElement("button", "copyBtn");
    copyBtn.textContent = "SVG";
    copyBtn.addEventListener('click', (e) => {
        navigator.clipboard.writeText(makeSvg(textInput.value))
        downloadSVGFile(makeSvg(textInput.value), 'myfilename.svg', 'text/plain')
    })
    copyBtn.style.display = "none"

    neonStringParameters.appendChild(textInput);
    neonStringParameters.appendChild(heightInput);
    neonStringParameters.appendChild(palette);
    neonStringParameters.appendChild(copyBtn);
    productInputs.appendChild(neonStringParameters);
    if (productText.children.length != 1) {
        addSiblingTextStyles(neonString);
        heightInput.value = neonStringParameters.previousElementSibling.querySelector(".input__height").value;
    } else {
        heightInput.value = 10
        textInput.value = "HELLO!"
        neonString.textContent = textInput.value
        calc()
    }
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

function makeSvg(word) {
    // console.log(word)
    word = word.split('');
    let res = '';
    let pos = 0;
    word.forEach((el, i) => {
        if (comfortaa[el].hasOwnProperty('getLetter')) {
            if (comfortaa[el].getLetter(pos) != undefined) {
                if (el == "А" && word[i - 1] == "У") {
                    res = res + comfortaa[el].getLetter(pos - 60)
                    pos = pos + comfortaa[el].step - 60
                } else if (el == "А" && word[i - 1] == "Р") {
                    res = res + comfortaa[el].getLetter(pos - 35)
                    pos = pos + comfortaa[el].step - 35
                } else if (el == "А" && word[i - 1] == "Т") {
                    res = res + comfortaa[el].getLetter(pos - 35)
                    pos = pos + comfortaa[el].step - 35
                } else if (el == "О" && word[i - 1] == "Т") {
                    res = res + comfortaa[el].getLetter(pos - 35)
                    pos = pos + comfortaa[el].step - 35
                } else if (el == "Т" && word[i - 1] == "А") {
                    res = res + comfortaa[el].getLetter(pos - 35)
                    pos = pos + comfortaa[el].step - 35
                } else {
                    res = res + comfortaa[el].getLetter(pos)
                    pos = pos + comfortaa[el].step
                }
            }
        } else {
        }
    });
    if (res != "") {
        // svgBlock.innerHTML = `<svg style="background-color: wheat;height:100px; width:100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 307.14"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000;stroke-miterlimit:10;}.cls-1{stroke-linecap:round;stroke-width:17.01px;}.cls-2{stroke-width:2.83px;}</style></defs><title>A</title><g id="Layer_2" data-name="Layer 2"><g id="АЛФАВИТ">${res}</g></g></svg>`;
        // console.log(`<svg xmlns="http://www.w3.org/2000/svg" ><defs><style>.cls-1,.cls-2{fill:none;stroke:#000;stroke-miterlimit:10;}.cls-1{stroke-linecap:round;stroke-width:17.01px;}.cls-2{stroke-width:2.83px;}</style></defs><title>A</title><g id="Layer_2" data-name="Layer 2"><g id="АЛФАВИТ">${res}</g></g></svg>`)
        return `<svg xmlns="http://www.w3.org/2000/svg" ><defs><style>.cls-1,.cls-2{fill:none;stroke:#000;stroke-miterlimit:10;}.cls-1{stroke-linecap:round;stroke-width:17.01px;}.cls-2{stroke-width:2.83px;}</style></defs><title>A</title><g id="Layer_2" data-name="Layer 2"><g id="АЛФАВИТ">${res}</g></g></svg>`
    }

}

function downloadSVGFile(data, filename, type) {
    var file = new Blob([data], { type: type });
    if (window.navigator.msSaveOrOpenBlob) 
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}