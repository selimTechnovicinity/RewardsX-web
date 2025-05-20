import assets from "@/assets";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const success = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <DialogContent className="text-center">
        <Box className="text-green-500 text-4xl mb-2 flex justify-center">
          <Image src={assets.images.success} alt="✅" />
        </Box>
        <Typography variant="h6" gutterBottom>
          Congratulations!
        </Typography>
        <Typography>
          Your advertisement has been successfully submitted for review.
        </Typography>
      </DialogContent>

      {/* Bottom-right button */}
      <DialogActions
        sx={{
          justifyContent: "flex-end",
          px: 3,
          pb: 2,
        }}
      >
        <Button
          color="primary"
          variant="contained"
          sx={{
            px: 4,
            py: 1,
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Next
        </Button>
      </DialogActions>
    </Box>
  );
};

export default success;
