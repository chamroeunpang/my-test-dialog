import { createMuiTheme } from "@material-ui/core/styles";

export const UptaleTheme = createMuiTheme({
  typography: {
    fontFamily: [
      "Karla",
      "Helvetica Neue",
      "Helvetica",
      "Arial",
      "sans-serif"
    ].join(","),
    button: {
      textTransform: "none",
      fontSize: "14px",
      "&:focus": {
        backgroundColor: "transparent"
      },
      "&$selected": {
        backgroundColor: "transparent"
      }
    }
  }
});
