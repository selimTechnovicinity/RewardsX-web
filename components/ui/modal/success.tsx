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
    <Box>
      <Typography variant="h2">Success</Typography>
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
      <DialogActions className="mb-4 mr-5">
        <Button color="primary" variant="contained">
          Close
        </Button>
      </DialogActions>
    </Box>
  );
};

export default success;
