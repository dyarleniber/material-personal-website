import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  media: {
    textAlign: "center",
    textTransform: "uppercase",
    height: 120,
  },
  avatar: {
    width: "60px",
    height: "60px",
    margin: `${theme.spacing(4)}px auto`,
  },
}));

export default useStyles;
