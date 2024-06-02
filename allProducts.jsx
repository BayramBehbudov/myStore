const productsDataes = [];

function generateUniqueKey() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;

  for (let i = 0; i < 7; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters[randomIndex];
  }

  return result;
}

const getDataDummyjson = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data;
};

const dataDummyjson = (await getDataDummyjson()).products;
dataDummyjson.forEach((productsData) => {
  productsData.category != "groceries" &&
    productsDataes.push({
      category: productsData.category,
      image: productsData.images[0],
      title: productsData.title,
      price: productsData.price,
      sku: generateUniqueKey(),
      reviews: productsData.reviews,
      brand: productsData.brand ? productsData.brand : "Example Brand",
      discountPercentage: productsData.discountPercentage,
      returnPolicy: productsData.returnPolicy,
      warrantyInformation: productsData.warrantyInformation,
      description: productsData.description,
      tags: productsData.tags,
      rating: productsData.rating,
    });
});

const getDataFakestoreapi = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
};

const dataFakestoreapi = await getDataFakestoreapi();

dataFakestoreapi.forEach((productsData) => {
  productsDataes.push({
    category: productsData.category,
    description: productsData.description,
    image: productsData.image,
    price: productsData.price,
    rating: productsData.rating.rate,
    title: productsData.title,
    brand: productsData.brand ? productsData.brand : "Example Brand",
    tags: ["tag1", "tag2"],
    returnPolicy: productsData.returnPolicy,

    sku: generateUniqueKey(),

    // discountPercentage: productsData.discountPercentage,
    // reviews: productsData.reviews,
    // warrantyInformation: productsData.warrantyInformation,
  });
});

function AllProducts() {
  return <div></div>;
}

export default AllProducts;
export const AllProductsData = productsDataes;
