import axios from "axios";
import imagekit from "../utils/imagekitUploader.js";
import dotenv from "dotenv";

dotenv.config();

const getImageUrl = async (product) => {
  const newImages = [];
  const imageUrls = [
    product.image, // this is fakestore api image url
    "https://source.unsplash.com/600x900/daily?shirt",
    "https://source.unsplash.com/600x900/daily?mobile",
    "https://source.unsplash.com/600x900/daily?watch",
    "https://source.unsplash.com/600x900/daily?shoes",
  ];
  for (let imageUrl of imageUrls) {
    const { url } = await imagekit.upload({
      file: imageUrl, // product has image url here.
      fileName: product.title,
      useUniqueFileName: true,
      folder: "/storejs-project/products", // this is the folder I created in the media library on my dashboard
    });
    newImages.push({ image: url, alt: product.title });
  }
  return new Promise((resolve, reject) => {
    if (Array.isArray(newImages) && newImages.length > 0) {
      resolve(newImages);
    } else {
      reject("No Images obtained from Imagekit");
    }
  });
};

const getProducts = async () => {
  const { status, data } = await axios.get("https://fakestoreapi.com/products");

  if (status === 200) {
    const newData = await Promise.all(
      data.map(async (product) => {
        delete product.id;
        product.images = await getImageUrl(product);
        delete product.image;
        product.discount = 10;
        product.countInStock = 5;
        return product;
      })
    );
    return newData;
  }
};
const products = await getProducts();
export default products;

/* Issues
    1. Promise related issues if I try to change anything.
    2. No result inside product.images - it's not even there.
*/
