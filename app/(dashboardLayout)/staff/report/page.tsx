"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import { useState } from "react";

const staffData = [
  { name: "Staff 1", hours: 50, wages: 300 },
  { name: "Staff 2", hours: 80, wages: 280 },
  { name: "Staff 3", hours: 55, wages: 310 },
  { name: "Staff 4", hours: 65, wages: 250 },
  { name: "Staff 5", hours: 60, wages: 320 },
  { name: "Staff 6", hours: 78, wages: 360 },
  { name: "Staff 7", hours: 40, wages: 290 },
];

const StaffReportDashboard = () => {
  const [period, setPeriod] = useState("Monthly");

  return (
    <Box className="p-6">
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Chart
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Staff Hours Report */}
        <Card variant="outlined" sx={{ rounded: "md", borderRadius: 2 }}>
          <CardContent>
            <div className="flex justify-between items-start">
              <div>
                <Typography variant="subtitle1" fontWeight="bold">
                  Staff Report by Hours
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Leads generated per week
                </Typography>
              </div>
              <div className="text-green-600 flex items-center gap-1 text-sm font-semibold">
                <ArrowUpward fontSize="small" /> 24%
              </div>
            </div>

            <div className="flex justify-between text-sm text-gray-500 mt-2 mb-2">
              <span>Money spent: $3,232</span>
              <span>Conversion rate: 1.2%</span>
            </div>

            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={staffData}>
                <XAxis dataKey="name" />
                <YAxis hide />
                <Tooltip />
                <Bar dataKey="hours" fill="#14532d" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>

            <div className="flex justify-between items-center text-sm mt-4">
              <Select
                size="small"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
              >
                <MenuItem value="Monthly">Monthly</MenuItem>
                <MenuItem value="Weekly">Weekly</MenuItem>
              </Select>
              <Button
                size="small"
                className="text-green-700"
                endIcon={<ArrowUpward />}
              >
                USERS REPORT
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Staff Wages Report */}
        <Card variant="outlined" sx={{ rounded: "md", borderRadius: 2 }}>
          <CardContent>
            <div className="flex justify-between items-start mb-2">
              <Typography variant="subtitle1" fontWeight="bold">
                Staff Report by Wages
              </Typography>
              <Select size="small" value="Weekly" className="text-sm">
                <MenuItem value="Weekly">Weekly</MenuItem>
                <MenuItem value="Monthly">Monthly</MenuItem>
              </Select>
            </div>

            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={staffData}>
                <defs>
                  <linearGradient id="colorWage" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#14532d" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#14532d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="wages"
                  stroke="#14532d"
                  fillOpacity={1}
                  fill="url(#colorWage)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </Box>
  );
};

export default StaffReportDashboard;
