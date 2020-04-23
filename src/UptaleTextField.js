import { TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import classnames from "classnames";

const useStyles = makeStyles(theme => ({
  textInput: {
    fontSize: "13px",
    minHeight: theme.spacing(2)
  },
  green: {
    "&$focusedLabel": {
      color: "green"
    }
  },
  labelRoot: {
    display: "flex",
    alignItems: "center",
    "&$focusedLabel": {
      color: "green"
    }
  },
  focusedLabel: {},
  error: {},
  root: {
    "&:after": {
      borderBottom: `2px solid green`
    }
  }
}));

/**
 * Simple Uptale customized text field
 * @param {any} props : special props : minWidth, maxWidth, minHeight, maxHeight
 */
const UptaleTextField = React.forwardRef(function UptaleTextField(props, ref) {
  const {
    fullWidth,
    InputProps,
    InputLabelProps,
    tooltip,
    value,
    multiline,
    label,
    margin,
    className,
    ...other
  } = props;
  const classes = useStyles();

  return (
    <TextField
      ref={ref}
      InputProps={{
        disableUnderline: !multiline,
        ...InputProps,
        classes: {
          input: classes.textInput,
          root: classes.root,
          error: classes.error
        }
      }}
      InputLabelProps={{
        shrink: true,
        ...InputLabelProps,
        classes: {
          root: classes.labelRoot,
          focused: classes.focusedLabel,
          error: classes.error
        }
      }}
      multiline={multiline}
      margin={margin || "normal"}
      fullWidth={fullWidth}
      className={classnames(classes.green, className)}
      value={value || ""}
      label={label}
      {...other}
    />
  );
});

export default UptaleTextField;
