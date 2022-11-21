import { Box } from "@mui/material";
import { FC } from "react";

import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie: FC = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
