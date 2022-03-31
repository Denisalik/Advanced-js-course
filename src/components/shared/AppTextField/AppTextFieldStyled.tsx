import {
  styled,
  TextField,
  textFieldClasses,
  outlinedInputClasses,
} from "@mui/material";

export default styled(TextField)(({ theme }) => ({
  border: "2px solid",
  width: 416,
  height: 50,
  [`&.${textFieldClasses.root}`]: {
    [`& .${outlinedInputClasses.root}`]: {
      borderColor: theme.palette.textField.normal.border,
      "&:active": {
        borderColor: theme.palette.textField.active.border,
      },
      "&:hover": {
        borderColor: theme.palette.textField.hover.border,
      },
      // "&:disabled": {
      //   borderColor: theme.palette.textField.disabled.border
      // }
    },
  },
}));
