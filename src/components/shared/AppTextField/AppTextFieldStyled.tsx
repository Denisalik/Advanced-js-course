import {
  styled,
  TextField,
  textFieldClasses,
  outlinedInputClasses,
} from "@mui/material";

export default styled(TextField)(({ theme }) => ({
  [`&.${textFieldClasses.root}`]: {
    // [`& .${outlinedInputClasses.root}`]: {
    //   borderColor: theme.palette.textField.normal.border,
    //   "&:active": {
    //     borderColor: theme.palette.textField.active.border,
    //   },
    //   "&:hover": {
    //     borderColor: theme.palette.textField.hover.border,
    //   },
    // },
  },
}));
