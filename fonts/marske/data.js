const marske = {
    "name": "Marske",
    ['letters']: {
        ["А"]: {
            l: 0.154,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},212.61v-31.49m104.65,31.49v-39.8c0,-8.84,-7.16,-16.01,-16,-16.01h-73.81c-8.2,0,-14.84,-6.64,-14.84,-14.84v-59.33c0,-5.28,2.1,-10.35,5.83,-14.08l4.43,-4.43c5.52,-5.53,13.01,-8.63,20.83,-8.63h42.98c7.53,0,14.77,2.89,20.24,8.06l3.81,3.61c3.98,3.76,6.23,8.99,6.23,14.46v52.42"></path>`;
            }
        },
        ["Б"]: {
            l: 0.170,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},211.61h73.44c6.59,0,12.92,-2.62,17.58,-7.29l4.66,-4.66c4.66,-4.66,7.28,-9.99,7.28,-16.58v-40.52c0,-6.59,-2.62,-12.92,-7.28,-17.59l-4.15,-4.15c-4.66,-4.66,-10.99,-7.28,-17.58,-7.28h-50.27m-23.68,74.4v-116.42c0,-8.85,7.17,-16.02,16.02,-16.02h86.95"></path>`;
            }
        },
        ["В"]: {
            l: 0.189,
            el: 3,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},211.61v-132m27.18,132h48.7c6.04,0,11.83,-2.4,16.1,-6.67l6.67,-5.66c4.26,-4.26,6.67,-10.06,6.67,-16.09v-19.14c0,-6.03,-2.4,-11.82,-6.67,-16.09l-4.17,-4.17c-4.27,-4.27,-10.06,-6.67,-16.09,-6.67h-78.39m0,-81.61h68.74c5.67,0,11.11,2.25,15.12,6.26l3.39,3.39c4.01,4.01,6.26,9.45,6.26,15.11v22.54c0,5.67,-2.25,11.11,-6.26,15.11l-19.93,16.69"></path>`;
            }
        },
        ["Г"]: {
            l: 0.083,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},212.61v-129.89m0,-27.22h107.41"></path>`;
            }
        },
        ["Д"]: {
            l: 0.187,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${128.37+x},267.61v-40.35c0,-8.16,-6.61,-14.78,-14.78,-14.78h-90.31c-8.16,0,-14.78,6.61,-14.78,14.78v40.35m14.86,-82v-75.49c0,-7.16,2.85,-14.03,7.91,-19.1l27.54,-27.54c5.06,-5.06,11.93,-7.91,19.1,-7.91h19.31c7.81,0,14.14,6.33,14.14,14.14v115.88"></path>`;
            }
        },
        ["Е"]: {
            l: 0.139,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${113.19+x},212.49h-73.39c-6.95,0,-13.62,-2.76,-18.54,-7.68l-5.08,-5.08c-4.91,-4.92,-7.68,-11.59,-7.68,-18.54v-21.31m88.44,-26.27h-72.69c-8.7,0,-15.75,-7.05,-15.75,-15.75v-35.51c0,-4.82,1.92,-9.44,5.32,-12.85l7.48,-7.48c3.41,-3.41,8.03,-5.32,12.85,-5.32h79.04"></path>`;
            }
        },
        ["Ж"]: {
            l: 0.180,
            el: 5,
            step: 200,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},54.71l58.13,60.13m23.85,-60.13v54.75m0,50.42v52.61m26.37,-61.88l63,62m-5,-158l-66.16,71.36c-4.33,4.86,-10.52,7.64,-17.03,7.64h0c-6.34,0,-12.39,2.64,-16.7,7.29l-66.46,71.59"></path>`;
            }
        },
        ["З"]: {
            l: 0.151,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},185.61v0.51c0,8.03,3.66,15.62,9.94,20.63h0c4.67,3.72,10.46,5.75,16.44,5.75h47.98c6.64,0,13.02,-2.64,17.72,-7.34l5.33,-5.33c4.7,-4.7,7.34,-11.07,7.34,-17.72v-31.49m-87.6,-17h57.77c6.93,0,13.58,-2.75,18.48,-7.66l5.67,-5.67c4.91,-4.9,7.66,-11.55,7.66,-18.48v-17.21c0,-6.93,-2.75,-13.58,-7.66,-18.48l-3.24,-3.25c-4.91,-4.9,-11.56,-7.66,-18.49,-7.66h-50.85c-5.98,0,-11.71,2.37,-15.94,6.6l-2.13,2.13c-4.23,4.23,-6.6,9.96,-6.6,15.94v1.22"></path>`;
            }
        },
        ["И"]: {
            l: 0.149,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},55.19v143c0,11.74,14.09,17.73,22.54,9.58l80.31,-94.38c2.6,-2.51,4.07,-5.97,4.07,-9.58v-49.1m0,90.64v67.13"></path>`;
            }
        },
        ["Й"]: {
            l: 0.179,
            el: 3,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},55.19v143c0,11.74,14.09,17.73,22.54,9.58l80.31,-94.38c2.6,-2.51,4.07,-5.97,4.07,-9.58v-49.1m0,90.64v66.13m-78.46,-202.98v8.34c0,3.49,1.39,6.83,3.85,9.3l8.75,8.74c2.48,2.47,5.81,1.85,9.3,1.85h2.55c3.49,0,6.83,0.61,9.3,-1.85l9.94,-9.94c2.47,-2.47,3.85,-5.81,3.85,-9.29v-7.15"></path>`;
            }
        },
        ["К"]: {
            l: 0.123,
            el: 3,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},54.71v53.9m0,102.88v-66.38c0,-6.9,5.6,-12.5,12.5,-12.5h8.01c5.35,0,10.48,-2.15,14.23,-5.96l70.88,-72.04m0,156.88l-61,-59.88"></path>`;
            }
        },
        ["Л"]: {
            l: 0.128,
            el: 1,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},211.49v-103.05c0,-5.23,1.95,-10.28,5.47,-14.16l29.77,-32.77c3.99,-4.4,9.65,-6.9,15.59,-6.9h2.25c5.59,0,10.95,2.22,14.9,6.18l31.62,31.65c3.95,3.95,6.16,9.3,6.16,14.89v104.16"></path>`;
            }
        },
        ["М"]: {
            l: 0.197,
            el: 4,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},211.49v-103.97m166,103.96v-103.96m-166,-27.07v-15.69c0,-8.76,9.9,-13.46,16.63,-8.61c0.76,0.55,1.4,1.23,2,1.95l49.15,59.86c7.52,9.15,21.52,9.2,29.1,0.09l50.11,-59.22c0.59,-0.72,1.24,-1.39,2,-1.93c6.75,-4.8,16.58,-0.09,16.58,8.64v14m-82.55,131.95v-82.02"></path>`;
            }
        },
        ["Н"]: {
            l: 0.124,
            el: 3,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},211.49v-51.48m105,-52.52v-52.48m1.25,156.48v-63.42c0,-7.98,-6.47,-14.46,-14.45,-14.46h-77.34c-7.98,0,-14.45,-6.47,-14.45,-14.46v-64.16"></path>`;
            }
        },
        ["О"]: {
            l: 0.147,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${47.01+x},54.99h-11.51c-6.06,0,-11.86,2.4,-16.14,6.68l-4.18,4.18c-4.27,4.28,-6.68,10.08,-6.68,16.14v102.93c0,5.6,2.06,11,5.79,15.18l3.81,4.28c4.33,4.86,10.53,7.64,17.03,7.64h11.88m26.49,-157.03h11.51c6.05,0,11.86,2.4,16.14,6.68l4.17,4.18c4.28,4.28,6.69,10.08,6.69,16.14v102.93c0,5.6,-2.06,11,-5.79,15.18l-3.81,4.28c-4.33,4.86,-10.53,7.64,-17.04,7.64h-11.87"></path>`;
            }
        },
        ["П"]: {
            l: 0.135,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},212.01v-130.4m0,-26.62h86.34c10.21,0,18.48,7.28,18.48,17.48v139.54"></path>`;
            }
        },
        ["Р"]: {
            l: 0.137,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${35.69+x},155.61h48.7c6.04,0,11.83,-2.4,16.1,-6.67l6.67,-6.67c4.27,-4.27,6.66,-10.06,6.66,-16.09v-45.14c0,-6.04,-2.39,-10.82,-6.66,-15.1l-4.17,-4.16c-4.27,-4.27,-10.06,-6.67,-16.1,-6.67h-78.39m0.02,156.91v-131.18"></path>`;
            }
        },
        ["С"]: {
            l: 0.115,
            el: 3,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${47.01+x},54.99h-11.51c-6.06,0,-11.86,2.4,-16.14,6.68l-4.18,4.18c-4.27,4.28,-6.68,9.08,-6.68,15.13v103.93c0,5.6,2.06,11,5.79,15.18l3.81,4.28c4.33,4.86,10.53,7.64,17.03,7.64h11.88m26.72,-157.02h11.18c6.01,0,11.78,2.39,16.03,6.64l5.67,5.67c4.25,4.25,6.64,9.02,6.64,15.03v4.06m-39.52,126h11.18c6.01,0,11.78,-2.39,16.03,-6.64l5.67,-5.67c4.25,-4.25,6.64,-10.02,6.64,-16.03v-4.06"></path>`;
            }
        },
        ["Т"]: {
            l: 0.082,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${62.51+x},212.01v-140.57c0,-9.06,-7.39,-16.44,-16.44,-16.44h-37.57m77.78,0h30.22"></path>`;
            }
        },
        ["У"]: {
            l: 0.153,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},54.99v69.8c0,5.58,2.22,10.93,6.16,14.87l7.35,7.35c3.95,3.94,9.3,6.16,14.87,6.16h53.85m24.74,-98.18v129.75c0,4.4,-1.75,8.62,-4.86,11.72l-10.93,10.93c-3.1,3.11,-7.32,4.85,-11.72,4.85h-50.1c-4.4,0,-8.61,-1.74,-11.72,-4.85l-8.56,-8.56c-3.11,-3.1,-4.86,-7.32,-4.86,-11.72v-7.38"></path>`;
            }
        },
        ["Ф"]: {
            l: 0.189,
            el: 3,
            step: 200,
            getLetter(x) {
                return `<path class="cls-1" d="M${90.49+x},54.99v92.85m0,64.41v-20.11c0,-10.23,-8.3,-18.53,-18.53,-18.53h-36.14c-5.22,0,-10.23,-2.07,-13.92,-5.77l-7.64,-7.64c-3.69,-3.69,-5.76,-8.7,-5.76,-13.92v-47.8c0,-5.22,2.07,-10.23,5.76,-13.92l7.24,-7.24c3.69,-3.69,8.7,-5.77,13.92,-5.77h31.9m47.23,0h32.76c5.4,0,10.59,2.15,14.41,5.97l7.38,7.37c3.82,3.83,5.97,9.01,5.97,14.42v46.17c0,5.41,-2.15,10.59,-5.97,14.41l-8.28,8.28c-3.82,3.82,-9.01,5.97,-14.41,5.97h-31.86"></path>`;
            }
        },
        ["Х"]: {
            l: 0.123,
            el: 3,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},54.99v14.13c0,6.78,2.7,13.29,7.49,18.09l89.53,89.52c4.79,4.8,7.49,11.3,7.49,18.09v17.43m-104.51,0v-16.77c0,-4.39,1.75,-8.6,4.85,-11.7l32.22,-32.22m31.05,-33.95l32.39,-32.38c2.81,-2.81,4.38,-6.61,4.38,-10.59v-20.03"></path>`;
            }
        },
        ["Ц"]: {
            l: 0.158,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${113.75+x},54.61v133.61m-105.25,-133.61v140.17c0,9.65,7.81,17.47,17.46,17.47h88.08c9.65,0,17.5,7.82,17.5,17.47v32.89"></path>`;
            }
        },
        ["Ч"]: {
            l: 0.114,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},54.99v69.34c0,5.95,2.39,11.65,6.58,15.86l7.55,7.54c4.24,4.21,9.94,6.57,15.89,6.57h50.98m25.1,-99.71v157.66"></path>`;
            }
        },
        ["Ш"]: {
            l: 0.209,
            el: 3,
            step: 200,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},54.99v137.24c0,11.05,8.97,20.02,19.98,20.02h123.94c11.02,0,19.98,-8.96,19.98,-20.02v-137.24m-81.98,0v133.23"></path>`;
            }
        },
        ["Щ"]: {
            l: 0.228,
            el: 3,
            step: 200,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},54.61v140.17c0,9.65,7.85,17.47,17.5,17.47h152.07c9.65,0,17.45,7.82,17.45,17.47v32.89m-101.19,-207.62v133.23m81.98,-133.23v133.23"></path>`;
            }
        },
        ["Ъ"]: {
            l: 0.148,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},54.61h14.33c9.85,0,17.84,7.98,17.84,17.82v113.81m0,26.01h74.47c7.46,0,14.62,-2.96,19.89,-8.24l7.75,-7.75c5.26,-5.27,8.24,-12.43,8.24,-19.89v-31.1c0,-7.46,-2.97,-14.62,-8.24,-19.89l-6.53,-6.54c-5.26,-5.27,-12.43,-8.24,-19.89,-8.24h-50.01"></path>`;
            }
        },
        ["Ы"]: {
            l: 0.195,
            el: 3,
            step: 200,
            getLetter(x) {
                return `<path class="cls-1" d="M${10.6+x},54.99v133.23m151.04,-133.23v157.23m-153.14,0.02h74.48c7.46,0,14.62,-2.96,19.89,-8.24l7.75,-7.75c5.26,-5.27,8.24,-12.43,8.24,-19.89v-31.1c0,-7.46,-2.97,-14.62,-8.24,-19.89l-6.53,-6.54c-5.26,-5.27,-12.43,-8.24,-19.89,-8.24h-50.01"></path>`;
            }
        },
        ["Ь"]: {
            l: 0.140,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${10.65+x},54.99v133.23m-2.14,24.03h74.47c7.46,0,14.62,-2.96,19.89,-8.24l7.75,-7.75c5.31,-5.27,8.29,-12.43,8.29,-19.89v-31.1c0,-7.46,-2.97,-14.62,-8.29,-19.89l-6.53,-6.54c-5.26,-5.27,-12.43,-8.24,-19.89,-8.24h-49.96"></path>`;
            }
        },
        ["Э"]: {
            l: 0.133,
            el: 4,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${74.69+x},54.99h11.55c6.04,0,11.84,2.4,16.13,6.68l4.14,4.18c4.29,4.28,6.73,9.08,6.73,15.13v103.93c0,5.6,-2.1,11,-5.8,15.18l-3.8,4.28c-4.34,4.86,-10.53,7.64,-17.06,7.64h-11.89m-26.71,-157.02h-11.16c-5.99,0,-11.79,2.39,-16.04,6.64l-5.65,5.67c-4.24,4.25,-6.63,9.02,-6.63,15.03v4.06m39.48,126h-11.16c-5.99,0,-11.79,-2.39,-16.04,-6.64l-5.65,-5.67c-4.24,-4.25,-6.63,-10.02,-6.63,-16.03v-4.06m25.44,-46.49h53.22"></path>`;
            }
        },
        ["Ю"]: {
            l: 0.197,
            el: 4,
            step: 200,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},211.39v-51.63m0,-104.77v63.52c0,8.28,6.73,14.99,15.01,14.99h24.22c8.29,0,15.01,6.71,15.01,14.99v34.2c0,5.27,2,10.33,5.65,14.15l8.04,8.48c3.9,4.06,9.26,6.37,14.87,6.37h9.6m-39.56,-103.08v-23.08c0,-5.84,2.29,-11.45,6.43,-15.58l8.58,-8.55c4.14,-4.13,9.7,-6.45,15.55,-6.45h9.02m25.59,0h9.36c5.9,0,11.6,2.35,15.79,6.53l4.87,4.88c4.14,4.19,6.53,9.86,6.53,15.78v103.23c0,5.92,-2.39,11.59,-6.53,15.78l-3.95,3.93c-4.19,4.18,-9.85,6.54,-15.79,6.54h-10.28"></path>`;
            }
        },
        ["Я"]: {
            l: 0.165,
            el: 3,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${115.39+x},211.68v-129.91m0,-26.83h-79.1c-4.63,0,-9.11,1.85,-12.43,5.14l-10.23,10.25c-3.27,3.29,-5.12,7.76,-5.12,12.42v46.63c0,4.66,1.85,9.13,5.12,12.42l8.77,8.75c3.27,3.3,7.75,5.15,12.43,5.15h54.78m-79.69,55.98l54,-55.98"></path>`;
            }
        },
        ["A"]: {
            l: 0.154,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},212.61v-31.49m104.65,31.49v-39.8c0,-8.84,-7.16,-16.01,-16,-16.01h-73.81c-8.2,0,-14.84,-6.64,-14.84,-14.84v-59.33c0,-5.28,2.1,-10.35,5.83,-14.08l4.43,-4.43c5.52,-5.53,13.01,-8.63,20.83,-8.63h42.98c7.53,0,14.77,2.89,20.24,8.06l3.81,3.61c3.98,3.76,6.23,8.99,6.23,14.46v52.42"></path>`;
            }
        },
        ["B"]: {
            l: 0.189,
            el: 3,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},211.61v-132m27.18,132h48.7c6.04,0,11.83,-2.4,16.1,-6.67l6.67,-5.66c4.26,-4.26,6.67,-10.06,6.67,-16.09v-19.14c0,-6.03,-2.4,-11.82,-6.67,-16.09l-4.17,-4.17c-4.27,-4.27,-10.06,-6.67,-16.09,-6.67h-78.39m0,-81.61h68.74c5.67,0,11.11,2.25,15.12,6.26l3.39,3.39c4.01,4.01,6.26,9.45,6.26,15.11v22.54c0,5.67,-2.25,11.11,-6.26,15.11l-19.93,16.69"></path>`;
            }
        },
        ["C"]: {
            l: 0.115,
            el: 3,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${47.01+x},54.99h-11.51c-6.06,0,-11.86,2.4,-16.14,6.68l-4.18,4.18c-4.27,4.28,-6.68,9.08,-6.68,15.13v103.93c0,5.6,2.06,11,5.79,15.18l3.81,4.28c4.33,4.86,10.53,7.64,17.03,7.64h11.88m26.72,-157.02h11.18c6.01,0,11.78,2.39,16.03,6.64l5.67,5.67c4.25,4.25,6.64,9.02,6.64,15.03v4.06m-39.52,126h11.18c6.01,0,11.78,-2.39,16.03,-6.64l5.67,-5.67c4.25,-4.25,6.64,-10.02,6.64,-16.03v-4.06"></path>`;
            }
        },
        ["D"]: {
            l: 0.161,
            el: 1,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},84.46v108.65c0,9.06,7.39,16.44,16.44,16.44h61.37c6.8,0,13.33,-2.7,18.13,-7.51l2.8,-2.8c4.81,-4.81,7.51,-11.33,7.51,-18.13v-91.81c0,-6.8,-2.71,-13.33,-7.51,-18.14l-9.01,-9.01c-4.81,-4.81,-11.34,-7.51,-18.14,-7.51h-71.59"></path>
                `;
            }
        },
        ["E"]: {
            l: 0.139,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${113.19+x},212.49h-73.39c-6.95,0,-13.62,-2.76,-18.54,-7.68l-5.08,-5.08c-4.91,-4.92,-7.68,-11.59,-7.68,-18.54v-21.31m88.44,-26.27h-72.69c-8.7,0,-15.75,-7.05,-15.75,-15.75v-35.51c0,-4.82,1.92,-9.44,5.32,-12.85l7.48,-7.48c3.41,-3.41,8.03,-5.32,12.85,-5.32h79.04"></path>`;
            }
        },
        ["F"]: {
            l: 0.109,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},211.68v-54.73m89.93,-23.27h-72.42c-9.67,0,-17.5,-7.84,-17.5,-17.5v-29.8c0,-6.22,2.4,-12.21,6.7,-16.72l7.77,-8.12c4.57,-4.78,10.89,-7.48,17.49,-7.48h77.23"></path>`;
            }
        },
        ["G"]: {
            l: 0.129,
            el: 3,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${74.93+x},131.81h38.54v61.08l-17.97,17.97h-20.57m-25.99,0.82h-18.99l-21.45,-21.46v-119.37l18.21,-18.21h22.22m25.99,1h19.27l18.27,18.27v15.3"></path>`;
            }
        },
        ["H"]: {
            l: 0.125,
            el: 3,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},211.49v-51.48m105,-52.52v-52.48m1.25,156.48v-63.42c0,-7.98,-6.47,-14.46,-14.45,-14.46h-77.34c-7.98,0,-14.45,-6.47,-14.45,-14.46v-64.16"></path>`;
            }
        },
        ["I"]: {
            l: 0.084,
            el: 3,
            step: 80,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},53.64h41.75m-41.75,157h41.75m-20.86,-155.78v154.82"></path>
                `;
            }
        },
        ["J"]: {
            l: 0.108,
            el: 1,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${66.93+x},53.06h31.29c6.61,0,11.97,5.36,11.97,11.97v117.61c0,4.79,-1.9,9.38,-5.29,12.76l-10.5,10.51c-3.39,3.38,-7.98,5.29,-12.76,5.29h-48.41c-4.79,0,-9.38,-1.91,-12.76,-5.29l-6.69,-6.69c-3.38,-3.38,-5.28,-7.97,-5.28,-12.76v-10.66"></path>
                `;
            }
        },
        ["K"]: {
            l: 0.124,
            el: 3,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},54.71v53.9m0,102.88v-66.38c0,-6.9,5.6,-12.5,12.5,-12.5h8.01c5.35,0,10.48,-2.15,14.23,-5.96l70.88,-72.04m0,156.88l-61,-59.88"></path>`;
            }
        },
        ["L"]: {
            l: 0.094,
            el: 1,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},52.68v131.26c0,4.87,1.93,9.53,5.37,12.97l8.22,8.22c3.44,3.44,8.11,5.37,12.97,5.37h48.7c4.87,0,9.54,-1.93,12.98,-5.37l7.36,-7.36c3.44,-3.44,5.37,-8.11,5.37,-12.98v-9"></path>`;
            }
        },
        ["M"]: {
            l: 0.199,
            el: 4,
            step: 200,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},211.49v-103.97m166,103.96v-103.96m-166,-27.07v-15.69c0,-8.76,9.9,-13.46,16.63,-8.61c0.76,0.55,1.4,1.23,2,1.95l49.15,59.86c7.52,9.15,21.52,9.2,29.1,0.09l50.11,-59.22c0.59,-0.72,1.24,-1.39,2,-1.93c6.75,-4.8,16.58,-0.09,16.58,8.64v14m-82.55,131.95v-82.02"></path>`;
            }
        },
        ["N"]: {
            l: 0.150,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},210.08v-146.28c0,-9.13,11.03,-13.7,17.49,-7.25l81.97,95.97c3.61,3.61,5.64,8.51,5.64,13.62v43.94m0,-86.15v-70.87"></path>`;
            }
        },
        ["O"]: {
            l: 0.147,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${47.01+x},54.99h-11.51c-6.06,0,-11.86,2.4,-16.14,6.68l-4.18,4.18c-4.27,4.28,-6.68,10.08,-6.68,16.14v102.93c0,5.6,2.06,11,5.79,15.18l3.81,4.28c4.33,4.86,10.53,7.64,17.03,7.64h11.88m26.49,-157.03h11.51c6.05,0,11.86,2.4,16.14,6.68l4.17,4.18c4.28,4.28,6.69,10.08,6.69,16.14v102.93c0,5.6,-2.06,11,-5.79,15.18l-3.81,4.28c-4.33,4.86,-10.53,7.64,-17.04,7.64h-11.87"></path>`;
            }
        },
        ["P"]: {
            l: 0.137,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${35.69+x},155.61h48.7c6.04,0,11.83,-2.4,16.1,-6.67l6.67,-6.67c4.27,-4.27,6.66,-10.06,6.66,-16.09v-45.14c0,-6.04,-2.39,-10.82,-6.66,-15.1l-4.17,-4.16c-4.27,-4.27,-10.06,-6.67,-16.1,-6.67h-78.39m0.02,156.91v-131.18"></path>`;
            }
        },
        ["Q"]: {
            l: 0.190,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${115.49+x},175.68v-95.31c0,-4.93,-1.95,-9.66,-5.44,-13.14l-8.25,-8.25c-3.49,-3.48,-8.22,-5.44,-13.15,-5.44h-53.82c-4.93,0,-9.66,1.96,-13.15,5.44l-7,7c-3.48,3.48,-5.44,8.21,-5.44,13.14m71.24,130.96h-52.57l-19.41,-19.41v-69.49c0,-11.6,14.03,-17.42,22.24,-9.21l84.43,98.43"></path>
                `;
            }
        },
        ["R"]: {
            l: 0.165,
            el: 3,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},209.75v-129.91m0,-26.83h79.09c4.65,0,9.12,1.85,12.42,5.14l10.24,10.25c3.3,3.29,5.15,7.76,5.15,12.42v46.63c0,4.66,-1.85,9.13,-5.15,12.42l-8.74,8.74c-3.3,3.29,-7.77,5.15,-12.43,5.15h-54.82m79.69,55.98l-54,-55.98"></path>`;
            }
        },
        ["S"]: {
            l: 0.141,
            el: 3,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},181.76v3.22c0,5.57,2.22,10.91,6.16,14.85l4.59,4.59c3.94,3.94,9.28,6.15,14.85,6.15h13.23m22.71,-0.82h17.87c5.34,0,10.45,-2.12,14.23,-5.89l6.58,-6.58c3.77,-3.78,5.89,-8.89,5.89,-14.23v-15.85c0,-8.12,-4.93,-15.42,-12.46,-18.44l-81.17,-32.63c-7.53,-3.03,-12.47,-10.32,-12.47,-18.44v-17.88c0,-4.95,1.83,-9.72,5.13,-13.41l5.79,-6.48c3.81,-4.26,9.27,-6.7,14.99,-6.7h15.53m21.93,-0.2h13.27c5.01,0,9.86,1.79,13.66,5.05l7.74,6.63c4.66,3.99,7.35,9.81,7.35,15.94v4.89"></path>
                `;
            }
        },
        ["T"]: {
            l: 0.082,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${62.51+x},212.01v-140.57c0,-9.06,-7.39,-16.44,-16.44,-16.44h-37.57m77.78,0h30.22"></path>`;
            }
        },
        ["U"]: {
            l: 0.139,
            el: 1,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},53.01v130.33c0,4.98,1.98,9.75,5.5,13.28l8.16,8.16c3.52,3.52,8.29,5.5,13.27,5.5h51.82c4.61,0,9.06,-1.7,12.5,-4.77l7.11,-6.35c3.98,-3.56,6.26,-8.66,6.26,-14v-132.15"></path>
                `;
            }
        },
        ["V"]: {
            l: 0.129,
            el: 1,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},52.68v104.05c0,5.23,1.95,10.28,5.47,14.16l29.77,32.77c3.99,4.39,9.65,6.9,15.59,6.9h2.25c5.59,0,10.95,-2.22,14.9,-6.18l31.62,-31.66c3.95,-3.95,6.16,-9.3,6.16,-14.88v-105.16"></path>`;
            }
        },
        ["W"]: {
            l: 0.196,
            el: 4,
            step: 200,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},52.68v105.96m167,-105.96v105.96m-84,-105.96v140.97m-83,-9.46h0c0,4.71,1.87,9.23,5.21,12.56l6.36,6.37c4.34,4.33,10.22,6.77,16.35,6.77h25.87c6.13,0,12.02,-2.44,16.35,-6.77l2.91,-2.93c5.66,-5.65,14.83,-5.65,20.49,0l3.09,3.1c4.34,4.33,10.22,6.77,16.35,6.77h28.5c6.13,0,12.01,-2.44,16.34,-6.77l3.78,-3.78c3.33,-3.33,5.2,-7.85,5.2,-12.56v-2.2"></path>
                `;
            }
        },
        ["X"]: {
            l: 0.1933,
            el: 3,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},54.99v14.13c0,6.78,2.7,13.29,7.49,18.09l89.53,89.52c4.79,4.8,7.49,11.3,7.49,18.09v17.43m-104.51,0v-16.77c0,-4.39,1.75,-8.6,4.85,-11.7l32.22,-32.22m31.05,-33.95l32.39,-32.38c2.81,-2.81,4.38,-6.61,4.38,-10.59v-20.03"></path>`;
            }
        },
        ["Y"]: {
            l: 0.153,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},54.99v69.8c0,5.58,2.22,10.93,6.16,14.87l7.35,7.35c3.95,3.94,9.3,6.16,14.87,6.16h53.85m24.74,-98.18v129.75c0,4.4,-1.75,8.62,-4.86,11.72l-10.93,10.93c-3.1,3.11,-7.32,4.85,-11.72,4.85h-50.1c-4.4,0,-8.61,-1.74,-11.72,-4.85l-8.56,-8.56c-3.11,-3.1,-4.86,-7.32,-4.86,-11.72v-7.38"></path>`;
            }
        },
        ["Z"]: {
            l: 0.122,
            el: 3,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},52.68h40.02m21.59,0h31.05c10.38,0,16.57,11.53,10.87,20.17l-99.53,117.29c-5.7,8.65,0.49,20.18,10.87,20.18h25.15m24.56,0h40.31"></path>`;
            }
        },
        ["1"]: {
            l: 0.076,
            el: 2,
            step: 80,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},52.75h9.22c7.06,0,12.78,5.72,12.78,12.78v143.31m-22,0h45"></path>
                `;
            }
        },
        ["2"]: {
            l: 0.151,
            el: 1,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${114.11+x},179.39v2.23c0,6.04,-2.4,11.82,-6.66,16.09l-4.46,4.46c-4.27,4.27,-10.06,6.67,-16.09,6.67h-66.83c-6.39,0,-11.57,-5.19,-11.57,-11.58v-2.85c0,-3.07,1.22,-6.01,3.39,-8.18l95.38,-95.38c3.97,-3.97,6.21,-9.36,6.21,-14.98v-1c0,-4.79,-1.82,-9.4,-5.09,-12.89l-4.01,-4.29c-3.57,-3.81,-8.55,-5.97,-13.77,-5.97h-55.41c-5.18,0,-10.13,2.13,-13.7,5.9l-6.97,7.36c-3.32,3.5,-5.16,8.14,-5.16,12.96v5.2"></path>
                `;
            }
        },
        ["3"]: {
            l: 0.146,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},79.39v-13.1c0,-7.5,6.07,-13.57,13.56,-13.57h79.28c7.49,0,13.56,6.07,13.56,13.57v17.57c0,5.21,-2.07,10.21,-5.76,13.89l-10.14,10.14m-41.28,22.55h29.91c6.47,0,12.68,2.57,17.26,7.14l3.65,3.65c4.58,4.58,7.15,10.79,7.15,17.26v20.96c0,5.78,-2.29,11.32,-6.38,15.4l-7.61,7.61c-4.08,4.09,-9.62,6.38,-15.4,6.38h-49.56c-5.78,0,-11.31,-2.29,-15.4,-6.38l-3.82,-3.82c-4.09,-4.08,-6.38,-9.62,-6.38,-15.4v-4.77"></path>
                `;
            }
        },
        ["4"]: {
            l: 0.113,
            el: 2,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},52.72v69.31c0,5.38,2.14,10.54,5.94,14.35l7.44,7.43c3.8,3.81,8.96,5.95,14.35,5.95h53.96m24.07,-97.04v156.12"></path>
                `;
            }
        },
        ["5"]: {
            l: 0.157,
            el: 1,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${112.17+x},52.21h-90.77c-7.1,0,-12.85,5.75,-12.85,12.85v21.1c0,6.16,2.45,12.06,6.8,16.42l0.75,0.74c4.35,4.36,10.25,6.8,16.41,6.8h50.02c6.16,0,12.06,2.45,16.42,6.8l6.32,6.32c4.35,4.35,6.8,10.26,6.8,16.42v40.14c0,5.17,-2.06,10.13,-5.72,13.79l-9.53,9.53c-3.66,3.66,-8.62,5.72,-13.8,5.72h-52.1c-5.17,0,-10.14,-2.06,-13.79,-5.72l-2.9,-2.9c-3.66,-3.66,-5.72,-8.62,-5.72,-13.8v-9.89"></path>
                `;
            }
        },
        ["6"]: {
            l: 0.180,
            el: 1,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${115.09+x},83.53v-5.98c0,-5.58,-2.21,-10.92,-6.15,-14.86l-4.69,-4.69c-3.94,-3.94,-9.29,-6.16,-14.86,-6.16h-51.08c-5.57,0,-10.92,2.22,-14.86,6.16l-8.79,8.79c-3.94,3.94,-6.16,9.29,-6.16,14.86v98.75c0,6.48,2.58,12.7,7.16,17.29l4,3.99c4.58,4.59,10.8,7.16,17.29,7.16h50c6.49,0,12.71,-2.57,17.3,-7.16l2.57,-2.57c4.59,-4.59,7.16,-10.81,7.16,-17.29v-43.03c0,-6.16,-2.44,-12.06,-6.8,-16.42l-7.17,-7.17c-4.35,-4.35,-10.26,-6.8,-16.42,-6.8h-45.51"></path>
                `;
            }
        },
        ["7"]: {
            l: 0.105,
            el: 1,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},78.53v-11.31c0,-8.49,6.89,-15.38,15.39,-15.38h77.56c7.5,0,13.58,6.08,13.58,13.58v18.49c0,3.6,-1.43,7.05,-3.98,9.59l-40.58,40.59c-5.58,5.57,-8.71,13.12,-8.71,21v53.75"></path>
                `;
            }
        },
        ["8"]: {
            l: 0.179,
            el: 1,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${8.5+x},111.5v-30.61c0,-5.81,2.31,-11.38,6.42,-15.49l7.53,-7.53c4.11,-4.11,9.67,-6.42,15.49,-6.42h47.49c5.81,0,11.38,2.31,15.49,6.42l6.18,6.19c4.11,4.11,6.42,9.68,6.42,15.49v22.87c0,5.81,-2.31,11.39,-6.42,15.5l-5.85,5.85c-4.11,4.1,-9.68,6.41,-15.49,6.41h-49.28c-3.75,0,-7.34,1.49,-9.98,4.14l-10.45,10.44c-2.65,2.65,-4.14,6.24,-4.14,9.99v28.14c0,4.93,1.96,9.65,5.45,13.14l7.37,7.37c3.48,3.48,8.21,5.44,13.14,5.44h51.39c4.93,0,9.66,-1.96,13.14,-5.44l5.1,-5.1c3.49,-3.49,5.45,-8.21,5.45,-13.14v-36.17"></path>
                `;
            }
        },
        ["9"]: {
            l: 0.177,
            el: 1,
            step: 150,
            getLetter(x) {
                return `<path class="cls-1" d="M${83.31+x},151.1h-46.82c-5.87,0,-11.5,-2.33,-15.65,-6.49l-5.03,-5.03c-4.15,-4.15,-6.49,-9.78,-6.49,-15.65v-48.21c0,-5.52,2.2,-10.82,6.1,-14.72l2.28,-2.28c3.9,-3.9,9.2,-6.09,14.72,-6.09h49.43c5.52,0,10.81,2.19,14.72,6.09l3.96,3.97c3.91,3.91,6.1,9.2,6.1,14.72v103.7c0,5.75,-2.29,11.27,-6.35,15.34l-6.03,6.03c-4.07,4.07,-9.59,6.36,-15.35,6.36h-44.47c-5.76,0,-11.28,-2.29,-15.35,-6.36l-4.21,-4.21c-4.07,-4.07,-6.36,-9.59,-6.36,-15.35v-12.6"></path>
                `;
            }
        },
        ["0"]: {
            l:0.193 ,
            el:1 ,
            step: 150,
            getLetter(x) {
                return `<path class="cls-2" d="M${8.81+x},147.85v-68.15c0,-5.98,2.18,-11.13,6.48,-15.29l6,-5.8c4.12,-3.98,9.05,-5.98,14.78,-5.98h51.17c6.06,0,11.28,2.25,15.45,6.65l3.45,3.65c6.75,7.13,7.16,18.74,-0.06,25.39l-92.31,85.09c-7.35,6.78,-6.78,18.69,0.3,25.76l3.44,3.44c4.14,4.14,9.18,6.23,15.03,6.23h52.72c5.86,0,10.89,-2.09,15.03,-6.23l5.59,-5.59c4.14,-4.14,6.23,-9.18,6.23,-15.03v-66.5"></path>`;
            }
        },
        [" "]: {
            l: 0,
            el: 0,
            step: 150,
            getLetter(x) {
                return ``;
            }
        },
        ["-"]: {
            l: 0.038,
            el: 1,
            step: 150,
            getLetter(x) {
                return ``;
            }
        },
    }, 
} //vinichenko,

for (const key in marske['letters']) {
    // console.log(key);
    // console.log(marske['letters'][key]);
    marske['letters'][key.toLowerCase()] = marske['letters'][key]
};

export default marske;