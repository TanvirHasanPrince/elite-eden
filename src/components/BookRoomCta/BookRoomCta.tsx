"use client";

import { FC } from "react";

type Props = {
  price: number;
  discount: number;
  specialNote: string;
};

const BookRoomCta: FC<Props> = (props) => {
  const { price, discount, specialNote } = props;
  const discountPrice = price - (price / 100) * discount;



  return (
    <div className="px-7 py-6">
      <h3>
        <span
          className={`${discount ? "text-gray-400" : ""} font-bold text-xl `}
        >
          ${price}
        </span>
        {discount ? (
          <span className="font-medium text-xl">
            {" "}
            | Discount {discount}%. Now{" "}
            <span className="text-tertiary-dark">${discountPrice}</span>
          </span>
        ) : (
          ""
        )}
      </h3>
      <div className="w-full border-b-2 border-bottom-secondary my-2">
        <div className="my-8">{specialNote}</div>
      </div>
    </div>
  );
};

export default BookRoomCta;
