import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
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
    backgroundImage: "linear-gradient(to right, #cdcdcd, #f5f5f5)",
    opacity: "0.75",
  },
  content: {
    zIndex: "2",
    position: "relative",
  },
});

export default useStyles;
