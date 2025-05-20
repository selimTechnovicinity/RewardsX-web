"use client";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { FaDollarSign } from "react-icons/fa";
import { useRouter } from "next/navigation";

const revenueRanges = [
  "0 - $100,000",
  "$100,000 to $200,000",
  "$250,000 to $350,000",
  "$350,000 to $500,000",
  "$500,000 to $750,000",
  "$750,000 to $1,000,000",
  "Above $1,000,000",
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
          Help us understand more about your business !
        </Typography>
        <Typography variant="body2" className="text-center text-gray-600 mb-3">
          What’s your annual revenue?
        </Typography>
        <div className="text-center mb-10">
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
            Unlock 1000 RewardsX points
          </span>
        </div>

        {/* Revenue Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {revenueRanges.map((range) => (
            <div
              key={range}
              onClick={() => setSelected(range)}
              className={`cursor-pointer rounded-xl p-6 flex flex-col items-center justify-center text-center  transition-all shadow-sm
                ${
                  selected === range
                    ? "bg-green-50 border border-green-500 text-green-700"
                    : "bg-white hover:bg-gray-50"
                }`}
            >
              <FaDollarSign size={28} className="mb-2" color="#00664F" />
              <Typography variant="body2" fontWeight={500} color="primary">
                {range}
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
          className=" text-white px-6"
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
