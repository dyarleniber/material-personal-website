import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  avatar: {
    margin: theme.spacing(2),
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
  text: {
    position: "relative",
    maxWidth: 720,
    textAlign: "center",
    "& > *": {
      marginBottom: theme.spacing(2),
    },
  },
}));

export default useStyles;
