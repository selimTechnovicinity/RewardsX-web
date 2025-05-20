"use client";
import { useState } from "react";
import { Button, Typography, Grid } from "@mui/material";
import CustomInput from "@/components/form/CustomInput";
import CustomForm from "@/components/form/CustomForm";
import { FieldValues } from "react-hook-form";

const StaffOverviewPage = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleSubmit = (data: FieldValues) => {
    console.log("New Staff Data:", data);
    // API call to add staff can go here
  };

  return (
    <div className="px-10 py-6 space-y-6">
      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button
          variant="outlined"
          fullWidth
          onClick={() => setShowAddForm((prev) => !prev)}
        >
          Add Staff
        </Button>
        <Button variant="outlined" fullWidth>
          Attendance
        </Button>
        <Button variant="outlined" fullWidth>
          Schedule
        </Button>
      </div>

      {/* Staff Overview */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 border rounded-xl shadow bg-white">
          <Typography variant="subtitle1">Owner</Typography>
          <Typography variant="h6" fontWeight="bold">
            3
          </Typography>
        </div>
        <div className="p-4 border rounded-xl shadow bg-white">
          <div className="flex justify-between">
            <Typography variant="subtitle1">Manager</Typography>
            <Typography variant="body2">120 hrs</Typography>
          </div>
          <Typography variant="h6" fontWeight="bold">
            6
          </Typography>
        </div>
        <div className="p-4 border rounded-xl shadow bg-white">
          <div className="flex justify-between">
            <Typography variant="subtitle1">Staffs</Typography>
            <Typography variant="body2">120 hrs</Typography>
          </div>
          <Typography variant="h6" fontWeight="bold">
            9
          </Typography>
        </div>
      </div>

      {/* Add New Staff Form */}
      {showAddForm && (
        <div className="p-6 mt-4 border rounded-xl shadow bg-white">
          <Typography variant="h6" mb={3}>
            Add New Staff
          </Typography>
          <CustomForm onSubmit={handleSubmit}>
            <Grid container size={{xs:12}} spacing={2}>
              <Grid  size={{ xs: 4 }}>
                <CustomInput name="firstName" label="First Name" fullWidth />
                </Grid>
                <Grid size={{ xs: 4 }}>
                <CustomInput name="middleName" label="Middle Name" fullWidth />
                </Grid>
                <Grid size={{ xs: 4 }}>
                <CustomInput name="lastName" label="Last Name" fullWidth />
              </Grid>

              <CustomInput name="email" label="Email Address" fullWidth />
              <CustomInput name="phone" label="Phone Number" fullWidth />
              <CustomInput name="role" label="Select Role" fullWidth />
              <CustomInput name="manager" label="Manager" fullWidth />
              <CustomInput name="nonManager" label="Non-manager" fullWidth />
              <CustomInput name="wages" label="Wages per hour" fullWidth />
            </Grid>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="mt-4 bg-gradient-to-r from-green-500 to-green-700 text-white"
              sx={{ mt: 4 }}
            >
              Send Invite
            </Button>
          </CustomForm>
        </div>
      )}
    </div>
  );
};

export default StaffOverviewPage;
