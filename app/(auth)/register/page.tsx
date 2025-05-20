"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import assets from "@/assets";
import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import { registerMutationFn } from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

const RegisterValidationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  confirmPassword: z
    .string()
    .min(8, "Confirm Password must be at least 8 characters long"),
  // businessName: z.string().min(1, "Business Name is required"),
});

const RegisterPage = () => {
  const [error, setError] = React.useState<string | null>(null);

  const router = useRouter();

  const { mutate: register, isPending } = useMutation({
    mutationFn: registerMutationFn,
    onSuccess: (response) => {
      if (response.data?.status === "success") {
        router.push("/login");
      }
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError.response?.data?.message || "An unexpected error occurred.";
      setError(errorMessage);
    },
  });
  const handleRegister = (values: FieldValues) => {
    console.log("Register values", values);
    register(values); // Triggers the mutation
  };

  return (
    <div className="mx-20 mt-5">
      <div className=" flex gap-30">
        {/* Left Side - Image */}
        <div className="w-1/2 relative hidden md:block">
          <Image
            src={assets.images.signup}
            alt="Login"
            className=" w-150 h-160 rounded-l-2xl"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full max-w-150 md:w-1/2 flex items-center justify-center">
          <div className="w-full">
            <div className="flex justify-between items-center mb-4">
              <Typography variant="h4" fontWeight="bold">
                Sign up
              </Typography>
            </div>

            <Typography variant="body2" mb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography variant="h6" mb={4} sx={{ fontWeight: "bold" }}>
              No cedit card required.
            </Typography>

            <CustomForm
              onSubmit={handleRegister}
              resolver={zodResolver(RegisterValidationSchema)}
              defaultValues={{
                email: "",
                password: "",
                name: "",
                businessName: "",
                confirmPassword: "",
              }}
            >
              <Grid container spacing={2} my={1}>
                <Grid size={{ xs: 6 }}>
                  <CustomInput name="name" label="Name" type="name" fullWidth />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <CustomInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth
                  />
                </Grid>
                <CustomInput
                  name="businessName"
                  label="Business Name"
                  type="name"
                  fullWidth
                />
                <CustomInput
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                />
                <CustomInput
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  fullWidth
                />
              </Grid>
              {error && (
                <Typography variant="body2" color="error" mb={2}>
                  {error}
                </Typography>
              )}
              <div className="flex justify-between items-center mb-4">
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label={
                    <span>
                      I agree to all the{" "}
                      <span className="text-red-500">Terms</span> and{" "}
                      <span className="text-red-500">Privacy Policies</span>
                    </span>
                  }
                />
              </div>

              <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{ backgroundColor: "primary", color: "white", py: 1 }}
              >
                Create account
              </Button>

              <Typography
                variant="body2"
                mt={2}
                className="text-center font-semibold"
              >
                Already have an account?{" "}
                <Link href="/login" className="text-red-500 font-semibold">
                  Login
                </Link>
              </Typography>

              <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="mx-2 text-gray-500 text-sm">
                  Or Sign up with
                </span>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outlined"
                  fullWidth
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
            </CustomForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
