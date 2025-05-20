"use client";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import assets from "@/assets";

const bankDetails = [
  {
    name: "ATB Bank",
    logo: assets.bank_logo[0],
  },
  {
    name: "CIBC Bank",
    logo: assets.bank_logo[1],
  },
  {
    name: "Scotia Bank",
    logo: assets.bank_logo[2],
  },
  {
    name: "TD Bank",
    logo: assets.bank_logo[3],
  },
  {
    name: "BMO Bank",
    logo: assets.bank_logo[4],
  },
  {
    name: "National Bank",
    logo: assets.bank_logo[5],
  },
  {
    name: "Other Bank",
    logo: assets.bank_logo[6],
  },
];

const RevenueSelectionPage = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  const handleNext = () => {
    if (selected) {
      console.log("Selected Revenue:", selected);
      router.push("/next-step"); // adjust as needed
    }
  };

  return (
    <div className=" flex flex-col justify-between p-10 bg-[#f9f9fb]">
      <div>
        <Typography variant="h5" className="text-center font-semibold mb-2">
          Your Banking Partner
        </Typography>
        <Typography variant="body2" className="text-center text-gray-600 mb-3">
          Select the bank, that you use for daily needs?
        </Typography>
        <div className="text-center mb-10">
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
            Unlock 1000 RewardsX points
          </span>
        </div>

        {/* Revenue Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {bankDetails.map((bank, index) => (
            <div
              key={index}
              onClick={() => setSelected(bank.name)}
              className={`cursor-pointer rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all shadow-sm
                ${
                  selected === bank.name
                    ? "bg-green-50 border border-green-500 text-green-700"
                    : "bg-white hover:bg-gray-50"
                }`}
            >
              <Image
                src={bank.logo}
                alt="Bank Logo"
                width={100}
                height={100}
                className="mb-2"
              />
              <Typography variant="body2" fontWeight={500}>
                {bank.name}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-40 max-w-6xl mx-auto w-full">
        <Button
          type="button"
          variant="outlined"
          className="text-green-800"
          onClick={() => router.back()}
        >
          Back
        </Button>
        <Button
          type="button"
          variant="contained"
          className="bg-green-600 text-white px-6"
          disabled={!selected}
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default RevenueSelectionPage;
