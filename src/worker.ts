import { gaussianBlur } from './blur';

onmessage = (event) => {
    const { imageData, radius } = event.data;
    const blurredImageData = gaussianBlur(imageData, radius);
    postMessage(blurredImageData.data, [blurredImageData.data.buffer]); // Передача буфера для производительности
};