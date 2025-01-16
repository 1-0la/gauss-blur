/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blur.ts":
/*!*********************!*\
  !*** ./src/blur.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gaussianBlur: () => (/* binding */ gaussianBlur)
/* harmony export */ });
function gaussianBlur(imageData, radius) {
    const width = imageData.width;
    const height = imageData.height;
    const data = imageData.data;
    const blurredData = new Uint8ClampedArray(data);
    const kernelSize = 2 * radius + 1;
    const kernel = generateGaussianKernel(radius);
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let r = 0, g = 0, b = 0, weightSum = 0;
            for (let ky = 0; ky < kernelSize; ky++) {
                for (let kx = 0; kx < kernelSize; kx++) {
                    const kernelValue = kernel[ky][kx];
                    const pixelX = x + kx - radius;
                    const pixelY = y + ky - radius;
                    if (pixelX >= 0 && pixelX < width && pixelY >= 0 && pixelY < height) {
                        const pixelIndex = (pixelY * width + pixelX) * 4;
                        r += data[pixelIndex] * kernelValue;
                        g += data[pixelIndex + 1] * kernelValue;
                        b += data[pixelIndex + 2] * kernelValue;
                        weightSum += kernelValue;
                    }
                }
            }
            const index = (y * width + x) * 4;
            blurredData[index] = Math.round(r / weightSum);
            blurredData[index + 1] = Math.round(g / weightSum);
            blurredData[index + 2] = Math.round(b / weightSum);
        }
    }
    return new ImageData(blurredData, width, height);
}
function generateGaussianKernel(radius) {
    const size = 2 * radius + 1;
    const kernel = Array(size).fill(null).map(() => Array(size));
    const sigma = radius / 3; // Стандартное отклонение
    const scale = 2 * Math.PI * sigma * sigma;
    let sum = 0;
    for (let i = -radius; i <= radius; i++) {
        for (let j = -radius; j <= radius; j++) {
            const exponent = -(i * i + j * j) / (2 * sigma * sigma);
            const value = Math.exp(exponent) / scale;
            kernel[i + radius][j + radius] = value;
            sum += value;
        }
    }
    // Нормализация ядра
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            kernel[i][j] /= sum;
        }
    }
    return kernel;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/dist/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blur__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blur */ "./src/blur.ts");

document.addEventListener('DOMContentLoaded', () => {
    const imageFileElement = document.getElementById('imageFile');
    const imageUrlElement = document.getElementById('imageUrl');
    const loadImageButton = document.getElementById('loadImage');
    const blurRadiusElement = document.getElementById('blurRadius');
    const blurButton = document.getElementById('blurButton');
    const imageCanvas = document.getElementById('imageCanvas');
    const blurredCanvas = document.getElementById('blurredCanvas');
    const imageCtx = imageCanvas.getContext('2d');
    const blurredCtx = blurredCanvas.getContext('2d');
    let imageData = null;
    const loadImageFromUrl = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const blob = await response.blob();
            const imageBitmap = await createImageBitmap(blob);
            imageCanvas.width = imageBitmap.width;
            imageCanvas.height = imageBitmap.height;
            imageCtx.drawImage(imageBitmap, 0, 0);
            imageData = imageCtx.getImageData(0, 0, imageCanvas.width, imageCanvas.height);
        }
        catch (error) {
            console.error('Ошибка загрузки изображения:', error);
            alert('Не удалось загрузить изображение.');
        }
    };
    const loadImageFromFile = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const image = new Image();
            image.onload = () => {
                imageCanvas.width = image.width;
                imageCanvas.height = image.height;
                imageCtx.drawImage(image, 0, 0);
                imageData = imageCtx.getImageData(0, 0, imageCanvas.width, imageCanvas.height);
            };
            image.src = e.target.result;
        };
        reader.readAsDataURL(file);
    };
    imageFileElement.addEventListener('change', (event) => {
        const file = event.target.files?.[0];
        if (file) {
            loadImageFromFile(file);
            imageUrlElement.value = '';
        }
    });
    loadImageButton.addEventListener('click', () => {
        const url = imageUrlElement.value;
        if (url) {
            loadImageFromUrl(url);
            imageFileElement.value = '';
        }
        else {
            alert('Введите URL изображения.');
        }
    });
    blurButton.addEventListener('click', () => {
        if (!imageData) {
            alert('Сначала загрузите изображение.');
            return;
        }
        const radius = parseInt(blurRadiusElement.value, 10);
        if (isNaN(radius) || radius < 1) {
            alert('Введите корректный радиус размытия.');
            return;
        }
        const width = imageData.width;
        const height = imageData.height;
        blurredCanvas.width = width;
        blurredCanvas.height = height;
        // Использование Web Worker для размытия
        if (window.Worker) {
            const worker = new Worker(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("src_worker_ts"), __webpack_require__.b));
            worker.postMessage({ imageData: imageData, radius: radius });
            worker.onmessage = (event) => {
                const blurredImageData = new ImageData(event.data, width, height);
                blurredCtx.putImageData(blurredImageData, 0, 0);
            };
            worker.onerror = (error) => {
                console.error('Ошибка в Worker:', error);
                alert('Произошла ошибка при размытии.');
            };
        }
        else {
            // Fallback для браузеров без поддержки Web Workers
            console.warn('Web Workers не поддерживаются, выполняется основная поток.');
            const blurredData = (0,_blur__WEBPACK_IMPORTED_MODULE_0__.gaussianBlur)(imageData, radius);
            blurredCtx.putImageData(blurredData, 0, 0);
        }
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLFdBQVcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFFN0QsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUN6QixNQUFNLGdCQUFnQixHQUFHLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNsRSxVQUFVLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwRCxDQUFDLENBQUM7WUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3ZCLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3pDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQztRQUNOLENBQUM7YUFBTSxDQUFDO1lBQ0osbURBQW1EO1lBQ25ELE9BQU8sQ0FBQyxJQUFJLENBQUMsNERBQTRELENBQUMsQ0FBQztZQUMzRSxNQUFNLFdBQVcsR0FBRyxtREFBWSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNwRCxVQUFVLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oaWdoLXBlcmZvcm1hbmNlLWJsdXIvLi9zcmMvYmx1ci50cyIsIndlYnBhY2s6Ly9oaWdoLXBlcmZvcm1hbmNlLWJsdXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGlnaC1wZXJmb3JtYW5jZS1ibHVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oaWdoLXBlcmZvcm1hbmNlLWJsdXIvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL2hpZ2gtcGVyZm9ybWFuY2UtYmx1ci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hpZ2gtcGVyZm9ybWFuY2UtYmx1ci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hpZ2gtcGVyZm9ybWFuY2UtYmx1ci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9oaWdoLXBlcmZvcm1hbmNlLWJsdXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vaGlnaC1wZXJmb3JtYW5jZS1ibHVyLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnYXVzc2lhbkJsdXIoaW1hZ2VEYXRhOiBJbWFnZURhdGEsIHJhZGl1czogbnVtYmVyKTogSW1hZ2VEYXRhIHtcclxuICAgIGNvbnN0IHdpZHRoID0gaW1hZ2VEYXRhLndpZHRoO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gaW1hZ2VEYXRhLmhlaWdodDtcclxuICAgIGNvbnN0IGRhdGEgPSBpbWFnZURhdGEuZGF0YTtcclxuICAgIGNvbnN0IGJsdXJyZWREYXRhID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGRhdGEpO1xyXG5cclxuICAgIGNvbnN0IGtlcm5lbFNpemUgPSAyICogcmFkaXVzICsgMTtcclxuICAgIGNvbnN0IGtlcm5lbCA9IGdlbmVyYXRlR2F1c3NpYW5LZXJuZWwocmFkaXVzKTtcclxuXHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGxldCByID0gMCwgZyA9IDAsIGIgPSAwLCB3ZWlnaHRTdW0gPSAwO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQga3kgPSAwOyBreSA8IGtlcm5lbFNpemU7IGt5KyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGt4ID0gMDsga3ggPCBrZXJuZWxTaXplOyBreCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2VybmVsVmFsdWUgPSBrZXJuZWxba3ldW2t4XTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwaXhlbFggPSB4ICsga3ggLSByYWRpdXM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGl4ZWxZID0geSArIGt5IC0gcmFkaXVzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGl4ZWxYID49IDAgJiYgcGl4ZWxYIDwgd2lkdGggJiYgcGl4ZWxZID49IDAgJiYgcGl4ZWxZIDwgaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBpeGVsSW5kZXggPSAocGl4ZWxZICogd2lkdGggKyBwaXhlbFgpICogNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgciArPSBkYXRhW3BpeGVsSW5kZXhdICoga2VybmVsVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGcgKz0gZGF0YVtwaXhlbEluZGV4ICsgMV0gKiBrZXJuZWxWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYiArPSBkYXRhW3BpeGVsSW5kZXggKyAyXSAqIGtlcm5lbFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWlnaHRTdW0gKz0ga2VybmVsVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9ICh5ICogd2lkdGggKyB4KSAqIDQ7XHJcbiAgICAgICAgICAgIGJsdXJyZWREYXRhW2luZGV4XSA9IE1hdGgucm91bmQociAvIHdlaWdodFN1bSk7XHJcbiAgICAgICAgICAgIGJsdXJyZWREYXRhW2luZGV4ICsgMV0gPSBNYXRoLnJvdW5kKGcgLyB3ZWlnaHRTdW0pO1xyXG4gICAgICAgICAgICBibHVycmVkRGF0YVtpbmRleCArIDJdID0gTWF0aC5yb3VuZChiIC8gd2VpZ2h0U3VtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBJbWFnZURhdGEoYmx1cnJlZERhdGEsIHdpZHRoLCBoZWlnaHQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUdhdXNzaWFuS2VybmVsKHJhZGl1czogbnVtYmVyKTogbnVtYmVyW11bXSB7XHJcbiAgICBjb25zdCBzaXplID0gMiAqIHJhZGl1cyArIDE7XHJcbiAgICBjb25zdCBrZXJuZWw6IG51bWJlcltdW10gPSBBcnJheShzaXplKS5maWxsKG51bGwpLm1hcCgoKSA9PiBBcnJheShzaXplKSk7XHJcbiAgICBjb25zdCBzaWdtYSA9IHJhZGl1cyAvIDM7IC8vINCh0YLQsNC90LTQsNGA0YLQvdC+0LUg0L7RgtC60LvQvtC90LXQvdC40LVcclxuICAgIGNvbnN0IHNjYWxlID0gMiAqIE1hdGguUEkgKiBzaWdtYSAqIHNpZ21hO1xyXG4gICAgbGV0IHN1bSA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IC1yYWRpdXM7IGkgPD0gcmFkaXVzOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gLXJhZGl1czsgaiA8PSByYWRpdXM7IGorKykge1xyXG4gICAgICAgICAgICBjb25zdCBleHBvbmVudCA9IC0oaSAqIGkgKyBqICogaikgLyAoMiAqIHNpZ21hICogc2lnbWEpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IE1hdGguZXhwKGV4cG9uZW50KSAvIHNjYWxlO1xyXG4gICAgICAgICAgICBrZXJuZWxbaSArIHJhZGl1c11baiArIHJhZGl1c10gPSB2YWx1ZTtcclxuICAgICAgICAgICAgc3VtICs9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDQndC+0YDQvNCw0LvQuNC30LDRhtC40Y8g0Y/QtNGA0LBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcclxuICAgICAgICAgICAga2VybmVsW2ldW2pdIC89IHN1bTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGtlcm5lbDtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuYnVuZGxlLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHsgZ2F1c3NpYW5CbHVyIH0gZnJvbSAnLi9ibHVyJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBpbWFnZUZpbGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlRmlsZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBpbWFnZVVybEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VVcmwnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgbG9hZEltYWdlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRJbWFnZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgY29uc3QgYmx1clJhZGl1c0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmx1clJhZGl1cycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBibHVyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JsdXJCdXR0b24nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IGltYWdlQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlQ2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBjb25zdCBibHVycmVkQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JsdXJyZWRDYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIGNvbnN0IGltYWdlQ3R4ID0gaW1hZ2VDYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XHJcbiAgICBjb25zdCBibHVycmVkQ3R4ID0gYmx1cnJlZENhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcclxuXHJcbiAgICBsZXQgaW1hZ2VEYXRhOiBJbWFnZURhdGEgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCBsb2FkSW1hZ2VGcm9tVXJsID0gYXN5bmMgKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VCaXRtYXAgPSBhd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChibG9iKTtcclxuICAgICAgICAgICAgaW1hZ2VDYW52YXMud2lkdGggPSBpbWFnZUJpdG1hcC53aWR0aDtcclxuICAgICAgICAgICAgaW1hZ2VDYW52YXMuaGVpZ2h0ID0gaW1hZ2VCaXRtYXAuaGVpZ2h0O1xyXG4gICAgICAgICAgICBpbWFnZUN0eC5kcmF3SW1hZ2UoaW1hZ2VCaXRtYXAsIDAsIDApO1xyXG4gICAgICAgICAgICBpbWFnZURhdGEgPSBpbWFnZUN0eC5nZXRJbWFnZURhdGEoMCwgMCwgaW1hZ2VDYW52YXMud2lkdGgsIGltYWdlQ2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J7RiNC40LHQutCwINC30LDQs9GA0YPQt9C60Lgg0LjQt9C+0LHRgNCw0LbQtdC90LjRjzonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfQndC1INGD0LTQsNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjCDQuNC30L7QsdGA0LDQttC10L3QuNC1LicpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbG9hZEltYWdlRnJvbUZpbGUgPSAoZmlsZTogRmlsZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGltYWdlQ2FudmFzLndpZHRoID0gaW1hZ2Uud2lkdGg7XHJcbiAgICAgICAgICAgICAgICBpbWFnZUNhbnZhcy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBpbWFnZUN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VEYXRhID0gaW1hZ2VDdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGltYWdlQ2FudmFzLndpZHRoLCBpbWFnZUNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBlLnRhcmdldCEucmVzdWx0IGFzIHN0cmluZztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbWFnZUZpbGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmZpbGVzPy5bMF07XHJcbiAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgbG9hZEltYWdlRnJvbUZpbGUoZmlsZSk7XHJcbiAgICAgICAgICAgIGltYWdlVXJsRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGxvYWRJbWFnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBpbWFnZVVybEVsZW1lbnQudmFsdWU7XHJcbiAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICBsb2FkSW1hZ2VGcm9tVXJsKHVybCk7XHJcbiAgICAgICAgICAgIGltYWdlRmlsZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgn0JLQstC10LTQuNGC0LUgVVJMINC40LfQvtCx0YDQsNC20LXQvdC40Y8uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgYmx1ckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAoIWltYWdlRGF0YSkge1xyXG4gICAgICAgICAgICBhbGVydCgn0KHQvdCw0YfQsNC70LAg0LfQsNCz0YDRg9C30LjRgtC1INC40LfQvtCx0YDQsNC20LXQvdC40LUuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IHBhcnNlSW50KGJsdXJSYWRpdXNFbGVtZW50LnZhbHVlLCAxMCk7XHJcbiAgICAgICAgaWYgKGlzTmFOKHJhZGl1cykgfHwgcmFkaXVzIDwgMSkge1xyXG4gICAgICAgICAgICBhbGVydCgn0JLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGL0Lkg0YDQsNC00LjRg9GBINGA0LDQt9C80YvRgtC40Y8uJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gaW1hZ2VEYXRhLndpZHRoO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGltYWdlRGF0YS5oZWlnaHQ7XHJcbiAgICAgICAgYmx1cnJlZENhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIGJsdXJyZWRDYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyDQmNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtSBXZWIgV29ya2VyINC00LvRjyDRgNCw0LfQvNGL0YLQuNGPXHJcbiAgICAgICAgaWYgKHdpbmRvdy5Xb3JrZXIpIHtcclxuICAgICAgICAgICAgY29uc3Qgd29ya2VyID0gbmV3IFdvcmtlcihuZXcgVVJMKCcuL3dvcmtlci50cycsIGltcG9ydC5tZXRhLnVybCkpO1xyXG4gICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpbWFnZURhdGE6IGltYWdlRGF0YSwgcmFkaXVzOiByYWRpdXMgfSk7XHJcblxyXG4gICAgICAgICAgICB3b3JrZXIub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBibHVycmVkSW1hZ2VEYXRhID0gbmV3IEltYWdlRGF0YShldmVudC5kYXRhLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGJsdXJyZWRDdHgucHV0SW1hZ2VEYXRhKGJsdXJyZWRJbWFnZURhdGEsIDAsIDApO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgd29ya2VyLm9uZXJyb3IgPSAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Ce0YjQuNCx0LrQsCDQsiBXb3JrZXI6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ9Cf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAg0L/RgNC4INGA0LDQt9C80YvRgtC40LguJyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gRmFsbGJhY2sg0LTQu9GPINCx0YDQsNGD0LfQtdGA0L7QsiDQsdC10Lcg0L/QvtC00LTQtdGA0LbQutC4IFdlYiBXb3JrZXJzXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignV2ViIFdvcmtlcnMg0L3QtSDQv9C+0LTQtNC10YDQttC40LLQsNGO0YLRgdGPLCDQstGL0L/QvtC70L3Rj9C10YLRgdGPINC+0YHQvdC+0LLQvdCw0Y8g0L/QvtGC0L7Qui4nKTtcclxuICAgICAgICAgICAgY29uc3QgYmx1cnJlZERhdGEgPSBnYXVzc2lhbkJsdXIoaW1hZ2VEYXRhLCByYWRpdXMpO1xyXG4gICAgICAgICAgICBibHVycmVkQ3R4LnB1dEltYWdlRGF0YShibHVycmVkRGF0YSwgMCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==