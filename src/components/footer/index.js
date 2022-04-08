import React from "react";
import { createUseStyles } from "react-jss";
import colors from "@/styles/colors";
import HorizontalLine from "@/public/images/horizontal-line.svg";

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footerContainer}>
      <HorizontalLine />
      <div className={classes.contact}>
        <span className={classes.title}>{`PARTNERSHIPS & COLLABS`}</span>
        <span
          className={classes.desc}
        >{`Have an idea? We’d love to hear it.`}</span>
        <div className="notched-rectengle-button">
          <span style={{ color: colors.textPurple }}>Reach out to Us</span>
        </div>
      </div>
      <HorizontalLine />
    </footer>
  );
}

const useStyles = createUseStyles({
  footerContainer: {
    backgroundColor: colors.background,
    paddingBottom: 191
  },
  contact: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    margin: {
      top: 60,
      bottom: 60,
    },
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    fontStyle: "italic",
    color: colors.whiteWithOpacity,
    textShadow: "0px 9px 9px rgba(208, 198, 247, 0.6)",
    textAlign: "center",
    marginBottom: 33,
  },
  desc: {
    fontSize: 24,
    color: colors.textPurpleWithOpacity,
    textAlign: "center",
    marginBottom: 52,
  },
});