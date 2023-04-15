import classes from "./IndexPage.module.css";
import AttendeeForm from "@/components/AttendeeForm/AttendeeForm";
import { GiDandelionFlower } from "react-icons/gi";
import { Footer } from "../Footer";

export const IndexPage = () => {
  return (
    <>
      <main className={classes.main}>
        <div className={classes.content}>
          <h1 style={{ marginBottom: 0 }}>Laura and Tristan</h1>
          <h2 style={{ marginBottom: 4 }}>are getting married</h2>
          <h3 style={{ marginBottom: 16 }}>on September 2nd, 2023</h3>
          <br />
          <div style={{ textAlign: "center" }}>
            <p>{"We're having a party"}</p>
            <p>{"You're invited!"}</p>
            <br />
            <br />
            <p>
              {
                "We're excited to see you. This is your invitation, you won't likely receieve other information from us. RSVP below."
              }
            </p>
          </div>
          <br />
          <br />
          <section className={classes.details}>
            <div className={classes.info}>
              <p className={classes.heavy}>Location</p>
              <p className={classes.description}>
                {"2078 Highway 329, The Lodge, NS (our place)"}
              </p>
            </div>
            <div className={classes.info}>
              <p className={classes.heavy}>Time</p>
              <p>
                {"Come after 3 PM. We'll have a brief ceremony around 4:30 PM."}
              </p>
            </div>
            <div className={classes.info}>
              <p className={classes.heavy}>Wear</p>
              <p>
                {
                  "Whatever makes you feel good. We'll be taking the opportunity to wear something fun and fancy."
                }
              </p>
            </div>
            <div className={classes.info}>
              <p className={classes.heavy}>Expect</p>
              <p className={classes.description}>
                {
                  "A party, rain or shine. Sufficient shelter to dance all night in any weather. Otherwise limited amenities. Bring whatever you need to spend the day outside. We'll have some chairs kicking around, but not enough for everybody. Bring one if you like."
                }
              </p>
            </div>
            <div className={classes.info}>
              <p className={classes.heavy}>Sleeping</p>
              <p>{"If you need a place to sleep, contact us."}</p>
            </div>
            <p style={{ marginTop: "32px" }}>
              {
                "Check back here before you come. Parking is going to require a plan :)."
              }
            </p>
          </section>
          <GiDandelionFlower size={64} style={{ margin: 32 }} />
          <AttendeeForm />
        </div>
      </main>
      <Footer />
    </>
  );
};
