const { encode } = require('blurhash');
const { createCanvas, loadImage } = require('canvas')

function getImageData(image) {
    const canvas = createCanvas(image.width, image.height);
    const context = canvas.getContext('2d');

    context.drawImage(image, 0, 0);

    return context.getImageData(0, 0, image.width, image.height);
}

async function encodeImageToBlurHash(imageUrl) {
    const image = await loadImage(imageUrl);
    const imageData = getImageData(image);

    return encode(imageData.data, imageData.width, imageData.height, 4, 3);
}

(async () => {
    const imgUrl = ''; // Here goes your file url (e.g. https://example.com/cat.jpg or C:\\Users\\Foo\\Desktop\\cat.jpg)
    const hash = await encodeImageToBlurHash(imgUrl);

    console.log('Blurhash: ', hash);
})()