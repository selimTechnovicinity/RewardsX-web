"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import assets from "@/assets";
import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import { setPasswordMutationFn } from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

const SetPasswordValidationSchema = z.object({
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
  confirmPassword: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});

const SetPasswordPage = () => {
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();

  const { mutate: setPassword, isPending } = useMutation({
    mutationFn: setPasswordMutationFn,
    onSuccess: (response) => {
      if (response.status === 200) {
        router.push("/login");
      } else {
        setError("Failed to set password. Please try again.");
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
    console.log("Reset values:", values);

    if (values.password !== values.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const otp = localStorage.getItem("OTP");

    if (!otp) {
      setError("OTP not found. Please restart the reset process.");
      return;
    }

    const payload = {
      otp,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

    setPassword(payload);
  };

  return (
    <div className="mx-20 mt-5">
      <div className="flex justify-between items-center gap-20">
        {/* Left Side - Form */}
        <div className="w-full max-w-150 md:w-1/2 ">
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Set a password
          </Typography>

          <Typography variant="body2" className="text-gray-600" sx={{ mb: 4 }}>
            Your previous password has been reseted. Please set a new password
            for your account.
          </Typography>

          <CustomForm
            onSubmit={handleSubmit}
            resolver={zodResolver(SetPasswordValidationSchema)}
            defaultValues={{ password: "", confirmPassword: "" }}
          >
            <div className="mb-4">
              <CustomInput
                name="password"
                label="Create password"
                type="password"
                fullWidth
              />
            </div>
            <div className="mb-4">
              <CustomInput
                name="confirmPassword"
                label="Re-enter password"
                type="password"
                fullWidth
              />
            </div>
            {error && (
              <Typography variant="body2" color="error" sx={{ mb: 2 }}>
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
              Set Password
            </Button>
          </CustomForm>
        </div>

        {/* Right Side - Image */}
        <div className=" hidden md:block ">
          <Image
            src={assets.images.setPassword}
            alt="Forgot Password"
            className="rounded-2xl w-100  object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SetPasswordPage;
