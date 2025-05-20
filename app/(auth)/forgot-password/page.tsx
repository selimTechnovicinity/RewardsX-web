"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import assets from "@/assets";
import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import { forgotPasswordMutationFn } from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { GoChevronLeft } from "react-icons/go";
import { z } from "zod";

const ForgotPasswordValidationSchema = z.object({
  email: z.string().email("Please enter a valid email!"),
});

const ForgotPasswordPage = () => {
  const [error, setError] = React.useState<string | null>(null);

  const router = useRouter();
  const { mutate: forgotPassword, isPending } = useMutation({
    mutationFn: forgotPasswordMutationFn,
    onSuccess: (response, variables) => {
      if (response.status === 200) {
        localStorage.setItem("EMAIL", variables.email);
        router.push("/verify-code");
      } else {
        setError("Failed to send reset email. Please try again.");
      }
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message || "An unexpected error occurred.";
      setError(errorMessage);
    },
  });
  const handleSubmit = (values: FieldValues) => {
    console.log("Reset email sent to:", values);
    forgotPassword(values);
  };

  return (
    <div className="mx-20 mt-5">
      <div className="flex justify-between items-center gap-20">
        {/* Left Side - Form */}
        <div className="w-full max-w-150 md:w-1/2 ">
          <Link
            href="/login"
            className="text-sm text-gray-900  mb-4 inline-block"
          >
            <span className="flex">
              <GoChevronLeft size={19} /> Back to login
            </span>
          </Link>

          <Typography variant="h4" fontWeight="bold" mb={2}>
            Forgot your password?
          </Typography>

          <Typography variant="body2" className="text-gray-600" sx={{ mb: 4 }}>
            Don’t worry, happens to all of us. Enter your email below to recover
            your password
          </Typography>

          <CustomForm
            onSubmit={handleSubmit}
            resolver={zodResolver(ForgotPasswordValidationSchema)}
            defaultValues={{ email: "" }}
          >
            <div className="mb-4">
              <CustomInput name="email" label="Email" type="email" fullWidth />
            </div>

            {error && (
              <Typography variant="body2" color="error" mb={2}>
                {error}
              </Typography>
            )}
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#14634F",
                color: "white",
                fontWeight: "bold",
                paddingY: "10px",
                borderRadius: "6px",
              }}
            >
              Submit
            </Button>
          </CustomForm>

          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="mx-3 text-gray-500 text-sm">Or login with</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          <div className="flex gap-4">
            <Button
              variant="outlined"
              fullWidth
              sx={{ textTransform: "none" }}
              startIcon={
                <Image
                  src={assets.images.google}
                  alt="Google"
                  width={20}
                  height={20}
                />
              }
            ></Button>
            <Button
              variant="outlined"
              fullWidth
              sx={{ textTransform: "none" }}
              startIcon={
                <Image
                  src={assets.images.apple}
                  alt="Apple"
                  width={20}
                  height={20}
                />
              }
            ></Button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className=" hidden md:block ">
          <Image
            src={assets.images.forgotPassword} // replace with actual image path
            alt="Forgot Password"
            className="rounded-2xl w-100  object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
