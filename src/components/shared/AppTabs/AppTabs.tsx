import { styled, Tabs, tabsClasses } from "@mui/material";

export default styled(Tabs)(({ theme }) => ({
  color: "red",
  [`& .${tabsClasses.root}`]: {
    color: "green",
  },
  [`& .${tabsClasses.scroller}`]: {
    // color: theme.palette.blue2 //todo add blue to palette and this component
  },
}));
