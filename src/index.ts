import { gaussianBlur } from './blur';

document.addEventListener('DOMContentLoaded', () => {
    const imageFileElement = document.getElementById('imageFile') as HTMLInputElement;
    const imageUrlElement = document.getElementById('imageUrl') as HTMLInputElement;
    const loadImageButton = document.getElementById('loadImage') as HTMLButtonElement;
    const blurRadiusElement = document.getElementById('blurRadius') as HTMLInputElement;
    const blurButton = document.getElementById('blurButton') as HTMLButtonElement;
    const imageCanvas = document.getElementById('imageCanvas') as HTMLCanvasElement;
    const blurredCanvas = document.getElementById('blurredCanvas') as HTMLCanvasElement;
    const imageCtx = imageCanvas.getContext('2d')!;
    const blurredCtx = blurredCanvas.getContext('2d')!;

    let imageData: ImageData | null = null;

    const loadImageFromUrl = async (url: string) => {
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
        } catch (error) {
            console.error('Ошибка загрузки изображения:', error);
            alert('Не удалось загрузить изображение.');
        }
    };

    const loadImageFromFile = (file: File) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const image = new Image();
            image.onload = () => {
                imageCanvas.width = image.width;
                imageCanvas.height = image.height;
                imageCtx.drawImage(image, 0, 0);
                imageData = imageCtx.getImageData(0, 0, imageCanvas.width, imageCanvas.height);
            };
            image.src = e.target!.result as string;
        };
        reader.readAsDataURL(file);
    };

    imageFileElement.addEventListener('change', (event) => {
        const file = (event.target as HTMLInputElement).files?.[0];
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
        } else {
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
            const worker = new Worker(new URL('./worker.ts', import.meta.url));
            worker.postMessage({ imageData: imageData, radius: radius });

            worker.onmessage = (event) => {
                const blurredImageData = new ImageData(event.data, width, height);
                blurredCtx.putImageData(blurredImageData, 0, 0);
            };

            worker.onerror = (error) => {
                console.error('Ошибка в Worker:', error);
                alert('Произошла ошибка при размытии.');
            };
        } else {
            // Fallback для браузеров без поддержки Web Workers
            console.warn('Web Workers не поддерживаются, выполняется основная поток.');
            const blurredData = gaussianBlur(imageData, radius);
            blurredCtx.putImageData(blurredData, 0, 0);
        }
    });
});