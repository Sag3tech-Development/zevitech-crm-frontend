import React from "react";

import { SectionalHeading01Props } from "@/interfaces/common-component-interfaces";

import { cn } from "@/lib/utils";

import { Separator } from "../ui/separator";

export const SectionalHeading01 = ({
  titleClassName,
  titleColor,
  title,
  subTitle,
}: SectionalHeading01Props) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h1
        className={cn(
          "font-poppins lg:text-5xl md:text-3xl text-lg tracking-wide text-heading font-semibold",
          titleClassName
        )}
      >
        <span className={titleColor}>{title}</span> {subTitle}
      </h1>

      <Separator />
    </div>
  );
};
