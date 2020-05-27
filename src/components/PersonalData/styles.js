import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
  socialmedia: {
    flexGrow: 1,
  },
}));

export default useStyles;
