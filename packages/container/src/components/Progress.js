import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) =>
  createStyles({
    bar: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
    progress: {
      height: 5,
    },
  })
);

export default function Progress() {
  const classes = useStyles();

  return (
    <div className={classes.bar}>
      <LinearProgress className={classes.progress} />
    </div>
  );
}
