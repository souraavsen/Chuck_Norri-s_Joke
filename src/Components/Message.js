import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const action = (
  <Button color='secondary' size='small'>
    lorem ipsum dolorem
  </Button>
);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Message = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SnackbarContent
        message={
                  "Press Search icon to get more joke on that Category or Heading section to get random Joke."
        }
      />
    </div>
  );
};

export default Message;
