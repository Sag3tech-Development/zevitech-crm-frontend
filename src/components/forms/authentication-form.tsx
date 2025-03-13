"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { AuthenticationFormData } from "@/interfaces/form-interfaces";

import { AuthenticationFormSchema } from "@/schemas/authentication-form-schema";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import CustomInput from "../common/custom-input-field";
import { Button } from "../ui/button";

import Logo from "../../../public/logos/zevitech-logo.png";
import { Loader2 } from "lucide-react";

const AuthenticationForm = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(AuthenticationFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = async (data: AuthenticationFormData) => {
    setLoading(true);

    console.log(data);

    setTimeout(() => {
      setLoading(false);
      router.push("/welcome");
    }, 2000);
  };

  return (
    <Card className="w-[400px] bg-white rounded-2xl shadow-xl">
      <CardHeader className="flex-center">
        <Image src={Logo} alt="Zevitech" height={90} priority />
      </CardHeader>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="flex flex-col md:gap-6 gap-4 md:mt-2 md:mb-4 mb-2">
            <CustomInput
              control={control}
              name="username"
              label="Username"
              placeholder="Enter your username"
            />

            <CustomInput
              control={control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
              isPassword={true}
            />
          </CardContent>

          <CardFooter>
            <Button
              className="w-full !h-[50px] hover:bg-primary-hover text-base font-semibold shadow-button-shadow"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="animate-spin" />
                  <p className="text-base">Please wait</p>
                </span>
              ) : (
                "Login"
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default AuthenticationForm;
