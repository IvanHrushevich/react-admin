import { Box } from "@mui/material";
import { FC } from "react";

import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line: FC = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
