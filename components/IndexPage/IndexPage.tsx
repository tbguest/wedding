import classes from "./IndexPage.module.css";
import AttendeeForm from "@/components/AttendeeForm/AttendeeForm";

export const IndexPage = () => {
  return (
    <main className={classes.main}>
      <h1 style={{ marginBottom: 0 }}>Laura and Tristan</h1>
      <h2 style={{ marginBottom: 4 }}>are getting married</h2>
      <h3 style={{ marginBottom: 16 }}>on September 2nd, 2023</h3>
      <p className={classes.description}>{"We're having a party"}</p>
      <p className={classes.description}>{"You're invited!"}</p>
      <p className={classes.description}>
        Ad sint occaecat amet amet. Adipisicing esse nulla incididunt esse
        aliquip minim tempor cupidatat ut officia. Ad id dolore nisi enim esse
        qui ut dolore velit non exercitation. Minim laboris nisi Lorem commodo
        duis duis aute irure labore. Sunt dolor elit duis consectetur eiusmod
        labore eiusmod. Nostrud eu sunt voluptate eiusmod est Lorem.
      </p>
      <p className={classes.description}>
        Amet sint velit commodo dolore dolore dolor incididunt excepteur magna
        pariatur amet irure. Proident occaecat id nisi consectetur aliqua
        aliquip ex. Ad nisi amet laborum et consectetur ad voluptate nostrud est
        aliquip incididunt tempor. Ut Lorem laborum aliqua cupidatat aliqua
        aliquip consequat eu sunt est sunt. Non quis Lorem elit labore. Pariatur
        duis ut fugiat adipisicing aute voluptate laboris aliquip duis ullamco
        incididunt. Duis ad ullamco dolor tempor eu.
      </p>
      <div>
        <h3>Are you coming?</h3>
      </div>
      <AttendeeForm />
    </main>
  );
};
