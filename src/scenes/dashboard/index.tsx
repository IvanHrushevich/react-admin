import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { Box, Button, useTheme } from "@mui/material";
import { FC } from "react";

import Header from "../../components/Header";
import { tokens } from "../../theme";

const Dashboard: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="WELCOME TO DASHBOARD" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
