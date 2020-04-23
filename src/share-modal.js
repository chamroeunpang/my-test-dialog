import {
  DialogContent,
  FormControl,
  InputLabel,
  InputAdornment,
  Button,
  Input,
  IconButton
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UptaleDialog from "./UptaleDialog";
import { UptaleGreenButton } from "./UptaleButton";
import UptaleTextField from "./UptaleTextField";
import React, { useCallback } from "react";
//import classnames from 'classnames';
import { FilterNoneOutlined, Link, Code, CropFree } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column"
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: "25ch"
  }
}));

export function ShareModal({
  experienceId,
  host,
  lang,
  share,
  langResources,
  isOpen,
  handleClose
}) {
  const classes = useStyles();

  const linkUrl = () => {
    let baseUrl = `${host}/Experience/Launch?id=${experienceId}`;
    if (lang != null) {
      return baseUrl + `&lang=${lang}`;
    }
    return baseUrl;
  };

  const iframeLink = `<iframe src='${linkUrl()}' width='600' height='300' frameborder='0' style='border:0' allowvr='yes' allow='fullscreen; gyroscope; accelerometer' scrolling='no'></iframe>`;
  const infos = [
    { label: "Permalink", value: linkUrl(), icon: <Link /> },
    { label: "Embed", value: iframeLink, icon: <Code /> }
  ];
  return (
    <UptaleDialog
      open={isOpen}
      onClose={handleClose}
      dialogTitle={share}
      isRoundedCorner={false}
    >
      <DialogContent>
        <div className={classes.root}>
          {infos.map((info, idx) => (
            <UptaleTextField
              key={idx}
              label={info.label}
              value={info.value}
              fullWidth={true}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <UptaleGreenButton isRoundedCorner={false}>
                      {info.icon}
                    </UptaleGreenButton>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <FilterNoneOutlined fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          ))}

          <InputLabel htmlFor="input-with-icon-adornment">QRCode</InputLabel>
          <UptaleGreenButton isRoundedCorner={false}>
            <CropFree />
          </UptaleGreenButton>
          <div className="DivQRCode" />
        </div>
      </DialogContent>
    </UptaleDialog>
  );
}

export default ShareModal;
