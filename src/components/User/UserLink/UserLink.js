import React from "react";
import { Link } from "react-router-dom";
import IconSmall from "../../ui/IconSmall";
import classes from "./UserLink.module.scss";

const UserLink = ({ link }) => {
  return (
    <Link to={link.link} className={classes.link} target="_blank">
      <IconSmall iconId="folder" />
      <span>{link.label}</span>
    </Link>
  );
};

export default UserLink;
