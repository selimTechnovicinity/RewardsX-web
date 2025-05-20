"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Typography, Grid } from "@mui/material";
import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import React from "react";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";

// Zod Schema
const businessSchema = z.object({
  tradeName: z.string().min(1, "Trade name is required"),
  legalName: z.string().min(1, "Legal name is required"),
  streetAddress: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  province: z.string().min(1, "Province is required"),
  postalCode: z.string().min(4, "Postal code is required"),
});

const BusinessSetupPage = () => {
  const router = useRouter();

  const handleSubmit = (data: FieldValues) => {
    console.log("Business Info:", data);
    // Redirect or save logic
    router.push("/next-step"); // Adjust this to your next route
  };

  return (
    <div className="min-h-screen flex flex-col justify-between p-10 bg-[#f9f9fb]">
      {/* Header and Form */}
      <div>
        <Typography variant="h5" className="text-center font-semibold mb-2">
          Let&apos;s set-up your business for engaging more customers
        </Typography>
        <div className="text-center mb-8">
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
            Unlock 1000 RewardsX points
          </span>
        </div>

        <div className="max-w-xl mx-auto bg-white  rounded-xl border border-gray-200">
          <div className=" border-b border-gray-200 mb-2">
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{ m: 3 }}
            >
              Primary Business Information
            </Typography>
          </div>
          <div className="p-6">
            <CustomForm
              onSubmit={handleSubmit}
              resolver={zodResolver(businessSchema)}
              defaultValues={{
                tradeName: "",
                legalName: "",
                streetAddress: "",
                city: "",
                province: "",
                postalCode: "",
              }}
            >
              <Grid container spacing={2}>
                <CustomInput
                  name="tradeName"
                  label="Trade name of the business"
                  fullWidth
                />
                <CustomInput
                  name="legalName"
                  label="Legal name of the business"
                  fullWidth
                />
                <CustomInput
                  name="streetAddress"
                  label="Street address"
                  fullWidth
                />
                <Grid size={6}>
                  <CustomInput name="city" label="City" fullWidth />
                </Grid>
                <Grid size={6}>
                  <CustomInput name="province" label="Province" fullWidth />
                </Grid>
                <CustomInput name="postalCode" label="Postal code" fullWidth />
              </Grid>

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <Button
                  type="button"
                  variant="outlined"
                  className="text-green-800"
                  onClick={() => router.back()}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  className="bg-green-600 text-white px-6"
                >
                  Next
                </Button>
              </div>
            </CustomForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSetupPage;
