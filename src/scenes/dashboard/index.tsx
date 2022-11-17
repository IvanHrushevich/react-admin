import { Box } from "@mui/material";
import { FC } from "react";

import Header from "../../components/Header";

const Dashboard: FC = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="WELCOME TO DASHBOARD" />
      </Box>
    </Box>
  );
};

export default Dashboard;
