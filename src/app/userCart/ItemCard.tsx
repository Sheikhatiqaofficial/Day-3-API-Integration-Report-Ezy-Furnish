import { CardProps } from "../types/components";
import Image from "next/image";
import React from "react";

interface ExtendedCardProps extends CardProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

const ItemCard: React.FC<ExtendedCardProps> = ({
  image,
  heading,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}) => {
  const priceValue = price ? Number(price) : 0; // Ensure price is a number or default to 0

  return (
    <div className="flex gap-4 bg-white rounded-lg p-4 shadow-md my-2">
      <Image
        src={`/images/${image}.png`}
        alt={`${heading} Image`}
        width={100}
        height={100}
        className="w-[100px] h-[100px] object-cover rounded-lg"
      />
      <div className="flex-1">
        <h5 className="font-clash text-lg text-darkPrimary">{heading}</h5>
        <p className="font-satoshi text-sm text-gray-700">Price: £{priceValue}</p>
        <div className="flex items-center mt-2 gap-2">
          <button
            onClick={onDecrease}
            className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          >
            -
          </button>
          <span className="px-4 py-1 bg-gray-100 text-gray-700 rounded-md">
            {quantity}
          </span>
          <button
            onClick={onIncrease}
            className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          >
            +
          </button>
        </div>
        <button
          onClick={onRemove}
          className="mt-2 text-sm text-red-500 hover:underline"
        >
          Remove
        </button>
      </div>
      <div className="pr-[19rem]">
        <p className="font-clash text-darkPrimary text-lg">
          £{priceValue * quantity}
        </p>
      </div>
    </div>
  );
};

export default ItemCard;