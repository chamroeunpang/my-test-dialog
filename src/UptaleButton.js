import React from "react";
import { Button, CircularProgress } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = (backgroundColor, isRoundedCorner) =>
  makeStyles(theme => ({
    root: {
      margin: theme.spacing(1),
      backgroundColor: backgroundColor,
      color: "white",
      borderRadius: isRoundedCorner ? theme.spacing(1) : 0,
      "&:focus": {
        backgroundColor: backgroundColor
      },
      "&:hover": {
        backgroundColor: backgroundColor
      },
      "&:disabled": {
        backgroundColor: theme.palette.grey[300],
        color: "#fff"
      }
    },
    wrapper: {
      margin: theme.spacing(1),
      position: "relative"
    },
    buttonProgress: {
      color: "green",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12
    }
  }));

const UptaleButton = props => {
  const {
    isRoundedCorner = true,
    isProcessing = false,
    backgroundColor = "grey",
    ...other
  } = props;
  const classes = useStyles(backgroundColor, isRoundedCorner)();
  return (
    <div className={classes.wrapper}>
      <Button classes={{ root: classes.root }} {...other} />
      {isProcessing && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </div>
  );
};

export const UptaleGreenButton = props => (
  <UptaleButton backgroundColor="green" {...props} />
);
