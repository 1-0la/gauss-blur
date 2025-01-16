export function gaussianBlur(imageData: ImageData, radius: number): ImageData {
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

function generateGaussianKernel(radius: number): number[][] {
    const size = 2 * radius + 1;
    const kernel: number[][] = Array(size).fill(null).map(() => Array(size));
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