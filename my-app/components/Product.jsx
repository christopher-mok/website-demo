import Image from "next/image";

export const Product = ({ data }) => {
  const { productName, price, productImage } = data;
  return (
    <div className="product">
      <Image src={productImage} alt={productName} width={600} height={600} />
      <div className="description">
        <p><b>{productName}</b></p>
        <p>${price}</p>
      </div>
    </div>
  );
};