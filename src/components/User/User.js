import React from "react";
import classes from "./User.module.scss";
import UserLink from "./UserLink/UserLink";

const userLinks = [
  { label: "Telegram", link: "https://t.me/iulia_mur" },
  { label: "GitHub", link: "https://github.com/IuliaMurtazina" },
  {
    label: "Resume",
    link: "https://hh.ru/resume/c8c53898ff07140c070039ed1f667731705368",
  },
];

const User = () => {
  return (
    <>
      <div className={classes.user}>
        <img
          src={`${process.env.PUBLIC_URL}/img/user-logo.jpg`}
          alt="Ava"
          className={classes.logo}
        ></img>
        <div className={classes.info}>
          <p>Юлия Муртазина</p>
          <div className={classes.links}>
            {userLinks.map((link) => (
              <UserLink link={link} key={link.label} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
