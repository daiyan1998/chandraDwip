export default async function getAllProductsImg() {
  const result = await fetch('');

  return result.json();
};