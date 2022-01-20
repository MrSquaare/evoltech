import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import { FC } from "react";

import { useDate } from "../../hooks/useDate";

export const TopBarClock: FC = () => {
  const { date } = useDate(60 * 1 * 1000);

  return (
    <Box sx={{ display: "flex" }}>
      <Typography
        variant="h5"
        component="h1"
        sx={{ color: "white", marginRight: "0.5rem" }}
      >
        {dayjs(date).format("ddd DD/MM")}
      </Typography>
      <Typography variant="h5" component="h1" sx={{ color: "white" }}>
        {dayjs(date).format("HH:mm")}
      </Typography>
    </Box>
  );
};
