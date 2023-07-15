"use client";
import React, { ReactNode, useState } from "react";
import { Button } from "./ui/button";

interface CardPorps {
  children: ReactNode;
  btnTilte: string;
  isBadge?: boolean;
  dark?: boolean;
  cardTitle: string;
  btnColor?: string;
}

export function Card({
  btnTilte,
  isBadge,
  dark,
  cardTitle,
  children,
  btnColor,
}: CardPorps) {
  return (
    <div
      className={`
        w-full max-w-xs sm:max-w-sm rounded-[10px] p-6 flex flex-col gap-4 border relative
        ${dark ? "bg-gray-900" : "bg-white"}
        `}
    >
      <span
        className={`
        font-semibold uppercase text-purple-600 text-sm
        ${dark && "mt-6"}
        `}
      >
        Para você começar
      </span>
      <div className="flex items-center justify-between">
        <span
          className={`
            font-bold text-2xl sm:text-[32px] text-gray-800
            ${dark && "text-white"}
            `}
        >
          {cardTitle}
        </span>
        <div className="flex items-center">
          <span className="text-[18px] mr-1">R$</span>
          <span className="text-xl sm:text-2xl font-bold">19,97</span>
          <span className="text-[18px] font-bold">/mês</span>
        </div>
      </div>
      <Button
        variant={"outline"}
        className={`w-full p-4 font-bold h-14 text-base ${btnColor}`}
      >
        {btnTilte}
      </Button>
      <hr className={`py-2 ${dark ? "border-gray-700" : "border-gray-200"}`} />
      <div className="flex flex-col gap-4">{children}</div>
      {isBadge && (
        <div className="absolute flex items-center justify-center w-[133px] h-[34px] rounded-[6px] bg-orange-400 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-gray-900 text-xs font-bold">
            Mais vantajoso
          </span>
        </div>
      )}
    </div>
  );
}
