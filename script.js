"use strict"
// fonts ===============================
import code_light from "./fonts/code_light/data.js";
import comfortaa from "./fonts/comfortaa/data.js";
import dream_beach from "./fonts/dream_beach/data.js";
import festus from "./fonts/festus/data.js";
import marske from "./fonts/marske/data.js";
import neon from "./fonts/neon/data.js";
import made_likes_script from "./fonts/made_likes_script/data.js";
import visual_hollow from "./fonts/visual_hollow/data.js";
import sailing_heart from "./fonts/sailing_heart/data.js";


// import made_good_time from "./fonts/made_good_time/data.js";
let ABV = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
let text = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
// Originally based on http://jsfiddle.net/MC53K/

// console.dir(test.sheet.cssRules[0]);

//https://codepen.io/leaverou/pen/RmwzKv
let fonts = [
    comfortaa.name,
    code_light.name,
    dream_beach.name,
    festus.name,
    marske.name,
    neon.name,
    made_likes_script.name,
    visual_hollow.name,
    sailing_heart.name,
    // 'Corinthia',
    // 'Madegoodtime',
];

const neonColors = [
     {
        name: 'Красный',
        color: 'rgb(255, 42, 42)',
        glow: '0 0 10px red, 0 0 20px red, 0 0 30px red, 0 0 40px red',
    },
    {
        name: 'Синий',
        color: 'rgb(45, 88, 255)',
        glow: '0 0 10px rgb(0, 52, 255), 0 0 20px rgb(0, 52, 255), 0 0 30px rgb(0, 52, 255), 0 0 40px rgb(0, 52, 255)',
    },
    {
        name: 'Зелёный',
        color: "rgb(80, 255, 77)",
        glow: '0 0 10px rgb(4, 255, 0), 0 0 20px rgb(4, 255, 0), 0 0 30px rgb(4, 255, 0), 0 0 40px rgb(4, 255, 0)',
    },
    {
        name: 'Оранжевый',
        color: "rgb(255, 182, 49)",
        glow: '0 0 10px orange, 0 0 20px orange, 0 0 30px orange, 0 0 40px orange',
    },
    {
        name: 'Желтый',
        color: 'yellow',
        glow: '0 0 10px yellow, 0 0 20px yellow, 0 0 30px yellow, 0 0 40px yellow',
    },
    {
        name: 'Фиолетовый',
        color: 'rgb(184, 104, 255)',
        glow: '0 0 10px rgb(132, 0, 249), 0 0 20px rgb(132, 0, 249), 0 0 30px rgb(132, 0, 249), 0 0 40px rgb(132, 0, 249)',
    },
    {
        name: 'Голубой',
        color: 'rgb(74, 203, 255)',
        glow: '0 0 10px rgb(0, 175, 246), 0 0 20px rgb(0, 175, 246), 0 0 30px rgb(0, 175, 246), 0 0 40px rgb(0, 175, 246)',
    },
    {
        name: 'Розовый',
        color: "rgb(255, 40, 226)",
        glow: '0 0 10px rgb(255, 1, 221), 0 0 20px rgb(255, 1, 221), 0 0 30px rgb(255, 1, 221), 0 0 40px rgb(255, 1, 221)',
    },
    {
        name: 'Бирюзовый',
        color: 'rgb(0, 255, 185)',
        glow: '0 0 10px rgb(0, 255, 185), 0 0 20px rgb(0, 255, 185), 0 0 30px rgb(0, 255, 185), 0 0 40px rgb(0, 255, 185)',
    },
    {
        name:'Белый',
        color: 'white',
        glow: '0 0 10px white, 0 0 20px white, 0 0 30px white, 0 0 40px white',
    },
    {
        name: 'Тёплый белый',
        color: 'rgb(252, 246, 186)',
        glow: '0 0 10px rgb(252, 246, 186), 0 0 20px rgb(252, 246, 186), 0 0 30px rgb(252, 246, 186), 0 0 40px rgb(252, 246, 186)',
    }
];
let zoom = 0;
let currentFont = fonts[0];
const fontsBD = {
    [code_light.name]:code_light.letters,
    [comfortaa.name]:comfortaa.letters,
    [dream_beach.name]:dream_beach.letters,
    [festus.name]:festus.letters,
    [marske.name]:marske.letters,
    [neon.name]:neon.letters,
    [made_likes_script.name]:made_likes_script.letters,
    [visual_hollow.name]:visual_hollow.letters,
    [sailing_heart.name]:sailing_heart.letters,
    // [made_good_time.name]:made_good_time.letters,
    
}

function getPromotionPerion() {
    const promotionPeriod = document.querySelector('.promotionPeriod');
    var now = new Date();
    const threeDaysLater = now.setDate(now.getDate() + 3);
    const day = new Date(threeDaysLater).getDate();
    const month = new Date(threeDaysLater).getMonth() + 1;
    const year = new Date(threeDaysLater).getFullYear();
    promotionPeriod.textContent = [day, month, year].join('.');
}

getPromotionPerion();


const productText = document.querySelector(".product__text");

const metrsText = document.querySelector(".m");
const square = document.querySelector(".s");
const els = document.querySelector(".el");
const workPrice = document.querySelector(".work");
const productWidth = document.querySelector('.product__width');
const productHeight = document.querySelector('.product__height');
const addNewString = document.querySelector(".addNewString");
const productBlock = document.querySelector(".product");
const price = document.querySelector(".client__new-price");
const oldPrice = document.querySelector(".client__old-price");
const optPrice = document.querySelector(".optPrice");
const productOutputs = document.querySelector('.parametrsOutput');
const svgBlock = document.querySelector(".svgblok");
const productFonts = document.querySelector('.productFonts');

const productStrings = document.querySelectorAll('.text__string');
const productOptions = document.querySelector('.product__options');

const createOptions = (string, stringFontSize) => {
    const options = createElement('div', 'options');
    const palette = createColorPalette(neonColors);
    const heightInput = createElement("input", "input__height");
    // options.setAttribute('contenteditable', 'false');
    heightInput.type = 'number';
    heightInput.min = 5;
    heightInput.value = +stringFontSize.slice(0, -2) / 4;
    options.appendChild(heightInput);
    options.appendChild(palette);
    productOptions.appendChild(options)
    // console.log(string);
    heightInput.addEventListener('input', (e) => {
        string.style.fontSize = +e.target.value * 4 + 'px';
    });
    options.style.gap = string.getBoundingClientRect().width + 55 + 'px';
    return options;
};

productStrings.forEach((el, i) => {
    // console.dir(el)
    const options = createOptions(el, el.style.fontSize);
    options.setAttribute('id', i);
    options.style.height = el.getBoundingClientRect().height + 'px'
    productOptions.appendChild(options);
    addMouseListener(el)
});

function addMouseListener(string) {
    string.addEventListener('wheel', w)
}
function w(e) {
    // console.log(e.target);
    if (e.deltaY > 1) {
        // console.log('up');
        e.target.style.fontSize = +e.target.style.fontSize.slice(0, -2) + 0.4 + 'px';
        calc()
    } if (e.deltaY < -1) {
        // console.log('down');
        e.target.style.fontSize = +e.target.style.fontSize.slice(0, -2) - 0.4 + 'px';
        calc()
    }
}

calc()


// makeSvg('oо', 'Comfortaa');
document.addEventListener('click', (e) => {
    // console.dir(e.target.offsetParent.offsetParent);
    const strings = document.querySelectorAll('.text__string');
    const oldOptions = document.querySelectorAll('.options');
    
    productWidth.style.display = 'none'
    productHeight.style.display = 'none';
    oldOptions.forEach(el => {
        el.remove()
    });
    if (e.target.className !== 'text__string') {
        strings.forEach((string, i) => {
            const newOptions = createOptions(string, string.style.fontSize);
            newOptions.setAttribute('id', i);
            productOptions.appendChild(newOptions);
            // console.log(string.getBoundingClientRect().height);
            newOptions.style.height = string.getBoundingClientRect().height + 'px';
            addMouseListener(string)
            // string.querySelector('.colors').setAttribute('contenteditable', 'false');
        });
        calc()
    }
    if (e.target.className == "color") {
        let color = e.target.style.backgroundColor;
        const stringId = +e.target.parentElement.parentElement.id;
        // console.dir(e.target.parentElement.parentElement.id);
        changeNeonColor(strings[stringId], color)
    }
    if (e.target.className == 'text__string') {
        strings.forEach((string, i) => {
            string.removeEventListener('wheel', w)
        })
    }

});

productText.addEventListener('keydown', (e) => {
    if (!e.target.firstElementChild) {
        // console.log('0');
        const firstString = createElement('div', 'text__string');
        productText.appendChild(firstString);
        firstString.style.minHeight = '45px';
        firstString.style.fontSize = '40px'
    }
    if (fontsBD[currentFont][e.key]
        || e.key == "ArrowLeft"
        || e.key == "ArrowRight"
        || e.key == "ArrowUp"
        || e.key == "Backspace"
        || e.key == "ArrowDown"
        || e.key == "Enter") {
        // console.dir(e.target.firstElementChild);
        return true   
    }
    
    // return calculation()
    return e.preventDefault();
});

productText.addEventListener('paste', (e) => {
    e.preventDefault()
    var text = e.clipboardData.getData("text/plain");
    document.execCommand("insertHTML", false, text);
});

const copyBtn = createElement("button", "copyBtn");
copyBtn.textContent = "SVG";
copyBtn.addEventListener('click', (e) => {
    // navigator.clipboard.writeText(makeSvg(textInput.value, currentFont))
    const text = document.querySelector('.product__text')
    console.log(text.innerText);
    downloadSVGFile(makeSvg(text.innerText, currentFont), 'text.svg', 'text/plain');
});
productOutputs.appendChild(copyBtn)

fonts.forEach(font => {
    const fontItem = document.createElement('span');
    fontItem.classList.add('fontItem')
    // console.log(fontItem);
    fontItem.textContent = font;
    fontItem.style.fontFamily = font;
    if (font == 'Comfortaa') {
        fontItem.classList.add('active')
    }
    productFonts.appendChild(fontItem)
});

const fontItems = document.querySelectorAll('.fontItem');

fontItems.forEach((font) => {
    font.addEventListener('click', changeFont)
})
function changeFont(font) {
    const neonTexts = document.querySelectorAll('.neonText');
    fontItems.forEach((el) => {
        el.classList.remove('active')
    })
    font.target.classList.add('active');
    currentFont = font.target.textContent;
    // console.log(currentFont);
    calc()
    productText.style.fontFamily = font.target.textContent;
    if (font.target.textContent == 'Corinthia') {
        neonTexts.forEach((text) => {
            text.style.padding = '0 .5rem 0 0.1rem'
        })
    }
    if (font.target.textContent == 'Marske') {
        neonTexts.forEach((text) => {
            // console.log(text);
            text.style.padding = '0 0 0 0.3rem'
        })
    }
    if (font.target.textContent == 'NEON') {
        neonTexts.forEach((text) => {
            // console.log(text);
            text.style.padding = '0 0.3rem 0 0.3rem';
        })
    } else {
        neonTexts.forEach((text) => {
            text.style.padding = '0'
        })
    }
};

//Расчет высоты
function calcHeight() {
    let height = productBlock.getBoundingClientRect().height
    // console.log(height);
    // console.log(width)
    return height

    //вернуть в px
    // productText.style.fontSize = `${+document.querySelector(".input__height").value * 4}px`;
    // console.log(+document.querySelector(".input__height").value * 4)
    // const pxWidth = productBlock.getBoundingClientRect().width
    // console.log(pxWidth)
    // productText.style.fontSize = "40px";
    // correctSizes()
    // return pxWidth
}
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
        if (!controlTextInput(e.key)) {
            e.preventDefault()
        } else {
            controlTextInput()
        }
    })
    textInput.addEventListener('input', (e) => {
        neonString.textContent = e.target.value;
        // console.log(e.target.value);
        calc()
        makeSvg(textInput.value, currentFont);
    })

    const heightInput = createElement("input", "input__height");
    heightInput.type = 'number';
    heightInput.min = 5;

    const palette = createColorPalette(neonColors, neonString);
    palette.addEventListener('click', (e) => {
        if (e.target.classList == "color") {
            let color = e.target.style.backgroundColor;
            changeNeonColor(neonString, color)
        }
    })

    heightInput.addEventListener('input', (e) => {
        // neonString.style.fontSize = `${+e.target.value * 4}px`;
        const allInputs = document.querySelectorAll('.input__height');
        const allStrings = document.querySelectorAll('.neonText');
        // allStrings.forEach((string, i) => {
        //     // console.log(allStrings[i])
        //     allStrings[i].style.fontSize = allInputs[i].value * 4 + 'px';
        // })
        // calc();
        // neonString.style.fontSize = `40px`;
    })
    heightInput.addEventListener('keydown', (e) => {
        // console.log(e)
        if (!e.key >= 5) {
            e.preventDefault()
        }
    })

    const copyBtn = createElement("button", "copyBtn");
    copyBtn.textContent = "SVG";
    copyBtn.addEventListener('click', (e) => {
        // navigator.clipboard.writeText(makeSvg(textInput.value, currentFont))
        downloadSVGFile(makeSvg(textInput.value, currentFont), 'text.svg', 'text/plain');
    })
    // copyBtn.style.display = "none"

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
        neonString.textContent = textInput.value;
        neonString.style.fontSize = '40px';
        // neonString.setAttribute('contenteditable', 'true')
        // neonString.setAttribute('spellcheck', 'false')
        calc()
    }
}

function calc() {

    let productPreview = [];
    const strings = document.querySelector('.product__text').children;
    const strings1 = document.querySelector('.product__text');
    const options = document.querySelectorAll('.options');
    // console.dir(strings1);
    const heightInput = document.querySelectorAll('.input__height');
    
    

    let metrs = 0;
    let elements = 1;
    let height = Math.ceil(calcHeight() / 4);;
    let width = Math.ceil(calcWidth() / 4);
    
    for (let i = 0; i < strings.length; i++) {
        // console.log(strings[i].style.fontSize.slice(0,-2));
        // console.log(strings[i].textContent);
        productPreview[i] = {
            text: strings[i].innerText.split(''),
            size: +strings[i].style.fontSize.slice(0, -2)/40,
        }
        // console.log(options[i]);
        options[i].style.height = strings[i].getBoundingClientRect().height + 'px';
        options[i].style.gap = strings[i].getBoundingClientRect().width + 55 + 'px';
        heightInput[i].value = +strings[i].style.fontSize.slice(0, -2) / 4;

        for (let j = 0; j < productPreview[i].text.length; j++) {
            if (fontsBD[currentFont][productPreview[i].text[j]]) {
                metrs = metrs + fontsBD[currentFont][productPreview[i].text[j]].l * 10 * productPreview[i].size;
                // console.log(fontsBD[currentFont])
                // console.log(metrs);
                elements = elements + fontsBD[currentFont][productPreview[i].text[j]].el
            }
        }
        // console.log(productPreview[i]);

    }
    productHeight.textContent = height + ' см';
    productWidth.textContent = width + ' см';
    square.textContent ='Площадь подложки ' + (height * width) / 10000 + ' m2';
    els.textContent = elements
    productWidth.style.display = 'flex'
    productHeight.style.display = 'flex'
    // console.log(metrs);
    metrsText.textContent = Math.ceil(metrs*1.1) / 10;
    // optPrice.textContent = calcPrice(elements, Math.ceil(metrs) / 100, height, width);
    // price.textContent = Math.ceil(calcPrice(elements, Math.ceil(metrs) / 100, height, width) * 1.2);
    // oldPrice.textContent = Math.ceil(calcPrice(elements, Math.ceil(metrs) / 100, height, width) * 1.4);
}

function createElement(tag, elClass) {
    const el = document.createElement(tag);
    el.classList.add(elClass)
    return el
}

function addSiblingTextStyles(el) {
    // console.dir(el);
    if (el.previousElementSibling != undefined) {
        el.style.color = el.previousElementSibling.style.color;
        el.style.textShadow = el.previousElementSibling.style.textShadow;
        el.style.fontSize = el.previousElementSibling.style.fontSize;
    } else {
        let colorCode = neonColors[0].color;
        el.style.color = colorCode;
        el.style.textShadow = `0 0 10px ${colorCode},0 0 20px ${colorCode},0 0 30px ${colorCode},0 0 40px ${colorCode}`;
        el.style.fontSize = 10
    }
}

function createColorPalette(colorsPalette, i) {
    const palette = createElement("div", "colors");
    for (let color in colorsPalette) {
        const colorItem = createColorItem(colorsPalette[color]);
        palette.appendChild(colorItem);
    }
    return palette
}

function createColorItem(color) {
    const colorItem = createElement("div", "color")
    colorItem.style.backgroundColor = color.color;
    return colorItem
}

function changeNeonColor(text, colorCode) {
    // console.log(colorCode);
    const neonColor = neonColors.find(el => el.color == colorCode);
    const glow = neonColor.glow;
    text.style.color = neonColor.color;
    text.style.textShadow = glow;
}

function makeSvg(word, font) {
    word = word.split('');
    let res = '';
    let pos = 0;
    console.log(word);
    word.forEach((el, i) => {
        if (el == '\n') {
            el = ' '
        }
        // console.log(!!fontsBD[font][el].getLetter);
        // return
        if (!!fontsBD[font][el] && !!fontsBD[font][el].getLetter) {
            if (fontsBD[font][el].getLetter(pos) != undefined) {
                // if (el == "А" && word[i - 1] == "У") {
                //     res = res + fontsBD['Comfortaa'][el].getLetter(pos - 60);
                //     pos = pos + fontsBD['Comfortaa'][el].step - 60;
                // } else if (el == "А" && word[i - 1] == "Р") {
                //     res = res + fontsBD['Comfortaa'][el].getLetter(pos - 35);
                //     pos = pos + fontsBD['Comfortaa'][el].step - 35;
                // } else if (el == "А" && word[i - 1] == "Т") {
                //     res = res + fontsBD['Comfortaa'][el].getLetter(pos - 35);
                //     pos = pos + fontsBD['Comfortaa'][el].step - 35;
                // } else if (el == "О" && word[i - 1] == "Т") {
                //     res = res + fontsBD['Comfortaa'][el].getLetter(pos - 35);
                //     pos = pos + fontsBD['Comfortaa'][el].step - 35;
                // } else if (el == "Т" && word[i - 1] == "А") {
                //     res = res + fontsBD['Comfortaa'][el].getLetter(pos - 35);
                //     pos = pos + fontsBD['Comfortaa'][el].step - 35;
                // } else {
                    res = res + fontsBD[font][el].getLetter(pos);
                    pos = pos + fontsBD[font][el].step;
                // }
            }
        } else {
        }
    });
    if (res != "") {
        // console.log(res);
        // svgBlock.innerHTML = `<svg id="_Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1227.33 1198.82"><defs><style>.cls-1 {fill: none;stroke: #000000;stroke-linecap: round;stroke-linejoin: round;stroke-width: 17.01px;}</style></defs>${res}</svg>`;

        return `<svg id="_Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1227.33 1198.82"><defs><style>.cls-1 {fill: none;stroke: #000000;stroke-linecap: round;stroke-linejoin: round;stroke-width: 17.01px;}</style></defs>${res}</svg>`
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



const getdata = function (path) {
    const res = path.map(el => {
        // console.log(el);
        const coordinates = el.filter(el => el > 1 || el < 1);
        const command = el[0];
        return command + coordinates
    });
    // console.log(res.join(''));
    return res.join('');
}

const paths = document.querySelectorAll('path');
let arr = [];
const ds = paths.forEach((el, i) => {
    // arr.push(el.attributes.d.nodeValue);
    const letter = el.attributes.d.nodeValue;
    let path = el.outerHTML;
    // console.dir((+el.getTotalLength()*0.000352778).toFixed(3))

    // console.dir(path);
    const newdata = getdata(Snap.path.toRelative(letter));
    const change = '${' + newdata.split(',')[0].slice(1) + '+x}';
    let newdata1 = newdata.replace(newdata.split(',')[0].slice(1), change);
    
    path = path.replace(letter, newdata1)
    // console.log(path);
    el.attributes.d.nodeValue = newdata;
    el.id = path;
    el.setAttribute('length', `${(+el.getTotalLength() * 0.352778).toFixed(0)}`)
    
    // console.log(Snap.path.toRelative(letter));
    // const data = getdata(Snap.path.toRelative(el))
});

const zoomBtn = document.querySelectorAll('.zoom__button');
// console.log(zoomBtn);
zoomBtn.forEach((btn, i) => {
    btn.addEventListener('click', e => {
        const strings = document.querySelectorAll('.neonText');
        if (i == 0) {
            strings.forEach(string => {
                const currentFontSize = +string.style.fontSize.slice(0, -2);
                // console.dir(string);
                string.style.fontSize = currentFontSize + 2 + 'px';
            });
        }
        if (i == 1) {
            strings.forEach(string => {
                const currentFontSize = +string.style.fontSize.slice(0, -2);
                // console.dir(string);
                string.style.fontSize = currentFontSize - 2 + 'px';
            });
        }
    }
    )
});


    // console.log(e);
    // const strings = document.querySelectorAll('.neonText');
    // strings.forEach(string => {
    //     const currentFontSize = +string.style.fontSize.slice(0, -2);
    //     // console.dir(string);
    //     string.style.fontSize = currentFontSize + zoomValue + 'px';
    //     console.log(zoomValue);
    // })


// const getCode = async function (arr) {
//     arr.forEach(el => {
//         getdata(Snap.path.toRelative(el))
//     })
// }
// getCode(arr)

// const zapaska = createElement('div', 'text__string');
// zapaska.textContent = 'srv';
// zapaska.style.display = 'none';
// // zapaska.style.height = '0px';
// productText.appendChild(zapaska)