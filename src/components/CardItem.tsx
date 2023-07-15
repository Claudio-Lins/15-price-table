import { Check, Info } from "lucide-react";
import React from "react";
interface CardItemProps {
  cardItemTitle: string;
  dark?: boolean;
  iconInfo?: boolean;
}

export function CardItem({ cardItemTitle, dark, iconInfo }: CardItemProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Check className="text-green-600" />
        <span
          className={`
            text-base w-[244px] sm:w-full tracking-wider
            ${dark ? "text-gray-300" : "text-gray-900"}
            `}
        >
          {cardItemTitle}
        </span>
      </div>
      {iconInfo && <Info className={`w-4 h-4 ${dark && "text-gray-500"}`} />}
    </div>
  );
}
