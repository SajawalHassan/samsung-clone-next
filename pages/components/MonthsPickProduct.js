import Image from "next/image";

export default function Product({ img, title, description }) {
  return (
    <div className="product p-5 text-center">
      <Image src={img} height={90} width={150} objectFit="contain" />

      <h1 className="text-sm font-medium">{title}</h1>
      <p className="inline text-xs text-gray-700">{description}</p>
    </div>
  );
}
