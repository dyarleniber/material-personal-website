import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  video: {
    position: "fixed",
    right: "0",
    bottom: "0",
    minWidth: "100%",
    minHeight: "100%",
    margin: "0",
    padding: "0",
    overflow: "hidden",
  },
  overlay: {
    position: "fixed",
    right: "0",
    bottom: "0",
    minWidth: "100%",
    minHeight: "100%",
    margin: "0",
    padding: "0",
    overflow: "hidden",
    zIndex: "1",
    backgroundImage: `linear-gradient(to bottom right, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
    opacity: "0.90",
  },
  content: {
    zIndex: "2",
    position: "relative",
  },
}));

export default useStyles;
