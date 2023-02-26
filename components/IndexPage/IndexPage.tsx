import classes from "./IndexPage.module.css";
import AttendeeForm from "@/components/AttendeeForm/AttendeeForm";
import { GiDandelionFlower } from "react-icons/gi";
import { Footer } from "../Footer";

export const IndexPage = () => {
  return (
    <>
      <main className={classes.main}>
        <h1 style={{ marginBottom: 0 }}>Laura and Tristan</h1>
        <h2 style={{ marginBottom: 4 }}>are getting married</h2>
        <h3 style={{ marginBottom: 16 }}>on September 2nd, 2023</h3>
        <br />
        <p className={classes.description}>{"We're having a party"}</p>
        <p className={classes.description}>{"You're invited!"}</p>
        <br />
        <br />
        <p className={classes.description}>
          {"2078 Highway 329, The Lodge, NS (our house)"}
        </p>
        <p className={classes.description}>
          {"Come after 3 PM. We'll have a brief ceremony around 4:30 PM."}
        </p>
        <p className={classes.description}>
          {
            "Expect: A party, rain or shine. Sufficient shelter to dance all night in any weather. Otherwise limited amenities. Bring whatever you need to spend the day outside. If you want to sit, bring a chair."
          }
        </p>
        <p className={classes.description}>
          {"If you need a place to sleep, contact us."}
        </p>
        <p className={classes.description}>
          {
            "Check back here before you come. Parking is going to require a plan :)."
          }
        </p>
        <GiDandelionFlower size={64} style={{ margin: 32 }} />
        <AttendeeForm />
      </main>
      <Footer />
    </>
  );
};
