import {
  Dialog,
  IconButton,
  DialogProps,
  DialogTitle,
  DialogActions,
  DialogContentText
} from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import * as React from "react";
import { UptaleTheme } from "./uptale-theme";

interface UptaleDialogStyleProps {
  closeIconColor: string;
  isRoundedCorner: boolean;
}

interface UptaleDialogProps extends DialogProps {
  dialogPaperClass?: any;
  hideCloseButton?: boolean;
  closeIconColor?: any;
  isRoundedCorner?: boolean;
  dialogTitle?: string;
  errorMessage?: string;
  actionButtons?: any;
}

const useStyles = makeStyles(theme => ({
  dialogPaper: (props: UptaleDialogStyleProps) => ({
    minHeight: "20%",
    minWidth: "20%",
    flex: 1,
    borderRadius: props.isRoundedCorner ? theme.spacing(1) : 0,
    [theme.breakpoints.down("xs")]: {
      maxWidth: "initial"
    }
  }),
  title: {
    maxWidth: "90%"
  },
  errorMessage: {
    padding: theme.spacing(1),
    backgroundColor: "red",
    color: "#fff"
  },
  closeButton: (props: UptaleDialogStyleProps) => ({
    right: 0,
    color: props.closeIconColor,
    position: "absolute",
    zIndex: 999
  })
}));

const UptaleDialog: React.FC<UptaleDialogProps> = (props, ref) => {
  const {
    onClose,
    open,
    dialogPaperClass,
    hideCloseButton,
    dialogTitle,
    errorMessage,
    children,
    closeIconColor,
    isRoundedCorner = true,
    actionButtons,
    ...other
  } = props;

  const styleProps = {
    closeIconColor:
      closeIconColor == null ? "rgba(0, 0, 0, 0.54)" : closeIconColor,
    isRoundedCorner: isRoundedCorner
  };

  const classes = useStyles(styleProps);

  let dialogPaperStyle =
    dialogPaperClass == null ? classes.dialogPaper : dialogPaperClass;

  return (
    <Dialog
      ref={ref}
      open={open || false /*Avoid undefined error from forward ref*/}
      onClose={onClose}
      classes={{
        paper: dialogPaperStyle
      }}
      {...other}
    >
      <ThemeProvider theme={UptaleTheme}>
        {dialogTitle && (
          <DialogTitle className={classes.title}>{dialogTitle}</DialogTitle>
        )}
        {!hideCloseButton && (
          <IconButton className={classes.closeButton} onClick={onClose as any}>
            <CloseIcon />
          </IconButton>
        )}
        {children}
        <Collapse in={errorMessage ? true : false}>
          <DialogContentText className={classes.errorMessage}>
            {errorMessage}
          </DialogContentText>
        </Collapse>
        {actionButtons && actionButtons.length > 0 && (
          <DialogActions>{actionButtons}</DialogActions>
        )}
      </ThemeProvider>
    </Dialog>
  );
};

export default React.forwardRef(UptaleDialog);
