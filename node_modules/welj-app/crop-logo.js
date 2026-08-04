const { Jimp } = require('jimp');

async function crop() {
  try {
    const image = await Jimp.read('public/logo.png');
    // Crop out any transparent padding
    image.autocrop();
    
    // Create a square canvas using the largest dimension
    const size = Math.max(image.bitmap.width, image.bitmap.height);
    const bg = new Jimp({ width: size, height: size, color: 0x00000000 }); // Transparent background
    
    // Center the cropped logo on the square canvas
    const x = (size - image.bitmap.width) / 2;
    const y = (size - image.bitmap.height) / 2;
    
    bg.composite(image, x, y);
    
    await bg.write('src/app/icon.png');
    console.log('Successfully created cropped square icon.png');
  } catch (error) {
    console.error('Error cropping image:', error);
  }
}

crop();
