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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/worker.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blur__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blur */ "./src/blur.ts");

onmessage = (event) => {
    const { imageData, radius } = event.data;
    const blurredImageData = (0,_blur__WEBPACK_IMPORTED_MODULE_0__.gaussianBlur)(imageData, radius);
    postMessage(blurredImageData.data, [blurredImageData.data.buffer]); // Передача буфера для производительности
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDeEIsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDOzs7Ozs7O1VDL0REO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0M7QUFFdEMsU0FBUyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUU7SUFDbEIsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3pDLE1BQU0sZ0JBQWdCLEdBQUcsbURBQVksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekQsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMseUNBQXlDO0FBQ2pILENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hpZ2gtcGVyZm9ybWFuY2UtYmx1ci8uL3NyYy9ibHVyLnRzIiwid2VicGFjazovL2hpZ2gtcGVyZm9ybWFuY2UtYmx1ci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9oaWdoLXBlcmZvcm1hbmNlLWJsdXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hpZ2gtcGVyZm9ybWFuY2UtYmx1ci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hpZ2gtcGVyZm9ybWFuY2UtYmx1ci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hpZ2gtcGVyZm9ybWFuY2UtYmx1ci8uL3NyYy93b3JrZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdhdXNzaWFuQmx1cihpbWFnZURhdGE6IEltYWdlRGF0YSwgcmFkaXVzOiBudW1iZXIpOiBJbWFnZURhdGEge1xyXG4gICAgY29uc3Qgd2lkdGggPSBpbWFnZURhdGEud2lkdGg7XHJcbiAgICBjb25zdCBoZWlnaHQgPSBpbWFnZURhdGEuaGVpZ2h0O1xyXG4gICAgY29uc3QgZGF0YSA9IGltYWdlRGF0YS5kYXRhO1xyXG4gICAgY29uc3QgYmx1cnJlZERhdGEgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkoZGF0YSk7XHJcblxyXG4gICAgY29uc3Qga2VybmVsU2l6ZSA9IDIgKiByYWRpdXMgKyAxO1xyXG4gICAgY29uc3Qga2VybmVsID0gZ2VuZXJhdGVHYXVzc2lhbktlcm5lbChyYWRpdXMpO1xyXG5cclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcclxuICAgICAgICAgICAgbGV0IHIgPSAwLCBnID0gMCwgYiA9IDAsIHdlaWdodFN1bSA9IDA7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBreSA9IDA7IGt5IDwga2VybmVsU2l6ZTsga3krKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQga3ggPSAwOyBreCA8IGtlcm5lbFNpemU7IGt4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXJuZWxWYWx1ZSA9IGtlcm5lbFtreV1ba3hdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBpeGVsWCA9IHggKyBreCAtIHJhZGl1cztcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwaXhlbFkgPSB5ICsga3kgLSByYWRpdXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwaXhlbFggPj0gMCAmJiBwaXhlbFggPCB3aWR0aCAmJiBwaXhlbFkgPj0gMCAmJiBwaXhlbFkgPCBoZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGl4ZWxJbmRleCA9IChwaXhlbFkgKiB3aWR0aCArIHBpeGVsWCkgKiA0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByICs9IGRhdGFbcGl4ZWxJbmRleF0gKiBrZXJuZWxWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZyArPSBkYXRhW3BpeGVsSW5kZXggKyAxXSAqIGtlcm5lbFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiICs9IGRhdGFbcGl4ZWxJbmRleCArIDJdICoga2VybmVsVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodFN1bSArPSBrZXJuZWxWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gKHkgKiB3aWR0aCArIHgpICogNDtcclxuICAgICAgICAgICAgYmx1cnJlZERhdGFbaW5kZXhdID0gTWF0aC5yb3VuZChyIC8gd2VpZ2h0U3VtKTtcclxuICAgICAgICAgICAgYmx1cnJlZERhdGFbaW5kZXggKyAxXSA9IE1hdGgucm91bmQoZyAvIHdlaWdodFN1bSk7XHJcbiAgICAgICAgICAgIGJsdXJyZWREYXRhW2luZGV4ICsgMl0gPSBNYXRoLnJvdW5kKGIgLyB3ZWlnaHRTdW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IEltYWdlRGF0YShibHVycmVkRGF0YSwgd2lkdGgsIGhlaWdodCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlR2F1c3NpYW5LZXJuZWwocmFkaXVzOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcclxuICAgIGNvbnN0IHNpemUgPSAyICogcmFkaXVzICsgMTtcclxuICAgIGNvbnN0IGtlcm5lbDogbnVtYmVyW11bXSA9IEFycmF5KHNpemUpLmZpbGwobnVsbCkubWFwKCgpID0+IEFycmF5KHNpemUpKTtcclxuICAgIGNvbnN0IHNpZ21hID0gcmFkaXVzIC8gMzsgLy8g0KHRgtCw0L3QtNCw0YDRgtC90L7QtSDQvtGC0LrQu9C+0L3QtdC90LjQtVxyXG4gICAgY29uc3Qgc2NhbGUgPSAyICogTWF0aC5QSSAqIHNpZ21hICogc2lnbWE7XHJcbiAgICBsZXQgc3VtID0gMDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gLXJhZGl1czsgaSA8PSByYWRpdXM7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAtcmFkaXVzOyBqIDw9IHJhZGl1czsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV4cG9uZW50ID0gLShpICogaSArIGogKiBqKSAvICgyICogc2lnbWEgKiBzaWdtYSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gTWF0aC5leHAoZXhwb25lbnQpIC8gc2NhbGU7XHJcbiAgICAgICAgICAgIGtlcm5lbFtpICsgcmFkaXVzXVtqICsgcmFkaXVzXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBzdW0gKz0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vINCd0L7RgNC80LDQu9C40LfQsNGG0LjRjyDRj9C00YDQsFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xyXG4gICAgICAgICAgICBrZXJuZWxbaV1bal0gLz0gc3VtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ga2VybmVsO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnYXVzc2lhbkJsdXIgfSBmcm9tICcuL2JsdXInO1xyXG5cclxub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB7IGltYWdlRGF0YSwgcmFkaXVzIH0gPSBldmVudC5kYXRhO1xyXG4gICAgY29uc3QgYmx1cnJlZEltYWdlRGF0YSA9IGdhdXNzaWFuQmx1cihpbWFnZURhdGEsIHJhZGl1cyk7XHJcbiAgICBwb3N0TWVzc2FnZShibHVycmVkSW1hZ2VEYXRhLmRhdGEsIFtibHVycmVkSW1hZ2VEYXRhLmRhdGEuYnVmZmVyXSk7IC8vINCf0LXRgNC10LTQsNGH0LAg0LHRg9GE0LXRgNCwINC00LvRjyDQv9GA0L7QuNC30LLQvtC00LjRgtC10LvRjNC90L7RgdGC0LhcclxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=