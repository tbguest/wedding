import Link from "next/link";
import classes from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Link href={"https://github.com/tbguest"}>@tbguest</Link>
    </footer>
  );
};
