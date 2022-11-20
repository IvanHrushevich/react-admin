import { Box } from "@mui/material";
import { FC } from "react";

import BarChart from "../../components/BarChart";
import Header from "../../components/Header";

const Bar: FC = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
