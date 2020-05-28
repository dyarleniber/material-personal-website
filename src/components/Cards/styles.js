import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    height: 406,
  },
  media: {
    textAlign: "center",
    textTransform: "uppercase",
    height: 140,
  },
  avatar: {
    width: "60px",
    height: "60px",
    margin: `${theme.spacing(4)}px auto`,
  },
}));

export default useStyles;
