"use client";

import React, { useState } from "react";
import { FieldValues } from "react-hook-form";

import { CustomInputProps } from "@/interfaces/common-component-interfaces";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";

const CustomInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  disabled = false,
  isPassword = false,
}: CustomInputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="relative">
          <FormLabel
            htmlFor={name as string}
            className={`text-heading md:text-base text-sm font-poppins ${
              disabled && "opacity-50"
            }`}
          >
            {label}
          </FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                id={name as string}
                disabled={disabled}
                type={isPassword && showPassword ? "text" : type}
                placeholder={placeholder}
                {...field}
                className="h-[55px] w-full rounded-[5px] bg-transparent focus-visible:ring-primary text-heading border border-border focus-visible:border-none"
              />
              {isPassword && (
                <div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <RiEyeFill size={20} className="text-paragraph"/>
                  ) : (
                    <RiEyeCloseFill size={20} />
                  )}
                </div>
              )}
            </div>
          </FormControl>
          <FormMessage className="text-destructive text-sm" />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
