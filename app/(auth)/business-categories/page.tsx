"use client";
import { useState } from "react";
import { GrRestaurant } from "react-icons/gr";
import {
  MdDevicesOther,
  MdOutlineAddBusiness,
  MdOutlineHandyman,
  MdOutlineHealthAndSafety,
} from "react-icons/md";
import { FaSpa, FaShoppingCart, FaDumbbell } from "react-icons/fa";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { MdOutlineCoffee } from "react-icons/md";
import { FaPersonBreastfeeding } from "react-icons/fa6";

const categories = [
  {
    name: "Café & Coffee shops",
    icon: <MdOutlineCoffee size={32} color="#00664F" />,
  },
  { name: "Restaurants", icon: <GrRestaurant size={32} color="#00664F" /> },
  {
    name: "Retail Stores",
    icon: <MdOutlineAddBusiness size={32} color="#00664F" />,
  },
  { name: "Salons & Spas", icon: <FaSpa size={32} color="#00664F" /> },
  {
    name: "Grocery & Supermarkets",
    icon: <FaShoppingCart size={32} color="#00664F" />,
  },
  {
    name: "Hardware & Home",
    icon: <MdOutlineHandyman size={32} color="#00664F" />,
  },
  {
    name: "Childcare & Education",
    icon: <FaPersonBreastfeeding size={32} color="#00664F" />,
  },
  {
    name: "Gyms & Fitness Studios",
    icon: <FaDumbbell size={32} color="#00664F" />,
  },
  {
    name: "Clinic & Health Services",
    icon: <MdOutlineHealthAndSafety size={32} color="#00664F" />,
  },
  {
    name: "IT Services & Electronics",
    icon: <MdDevicesOther size={32} color="#00664F" />,
  },
];

const BusinessCategoryPage = () => {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  const handleNext = () => {
    if (selected) {
      console.log("Selected Category:", selected);
      router.push("/business-details"); // adjust route as needed
    }
  };

  return (
    <div className=" flex flex-col justify-between p-10 bg-[#f9f9fb]">
      <div>
        <Typography variant="h5" className="text-center font-semibold mb-2">
          Pick your playground !
        </Typography>
        <Typography variant="body2" className="text-center text-gray-600 mb-3">
          Tell us where the magic happens ✨ — Whether you&apos;re brewing
          coffee, lifting dumbbells, or fixing leaky faucets, we’ve got perks
          tailor-made for your biz.
        </Typography>
        <div className="text-center mb-10">
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
            Unlock 1000 RewardsX points
          </span>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => setSelected(cat.name)}
              className={`cursor-pointer  rounded-xl p-4 flex flex-col items-center justify-center text-center transition-all shadow-sm
                ${
                  selected === cat.name
                    ? "bg-green-50 border border-green-500 text-green-700"
                    : "bg-white hover:bg-gray-50"
                }`}
            >
              <div className="mb-2">{cat.icon}</div>
              <Typography variant="body2" fontWeight={500}>
                {cat.name}
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

export default BusinessCategoryPage;
