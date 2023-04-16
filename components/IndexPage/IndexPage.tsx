import classes from "./IndexPage.module.css";
import AttendeeForm from "@/components/AttendeeForm/AttendeeForm";
import { GiDandelionFlower } from "react-icons/gi";
import { Footer } from "../Footer";
import classNames from "classnames";

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
            <p>{"We're having a party!"}</p>
            <p>{"This is your invitation. RSVP below."}</p>
            <GiDandelionFlower size={64} style={{ margin: 32 }} />
          </div>
          <section className={classes.details}>
            <div className={classes.info}>
              <p className={classNames(classes.heavy, classes.label)}>
                Location
              </p>
              <p className={classes.description}>
                {"2078 Highway 329, The Lodge, Nova Scotia (our place)"}
              </p>
            </div>
            <div className={classes.info}>
              <p className={classNames(classes.heavy, classes.label)}>Time</p>
              <p>
                {"Come after 3 PM. We'll have a brief ceremony around 4:30 PM."}
              </p>
            </div>
            <div className={classes.info}>
              <p className={classNames(classes.heavy, classes.label)}>Expect</p>
              <p className={classes.description}>
                {
                  "A party, rain or shine. Sufficient shelter to dance all night in any weather. Otherwise limited amenities. Bring whatever you need to spend the day outside. We'll have some chairs kicking around, but not enough for everybody. Bring one if you like. There will be food. We'll have some beer on tap, but plan to bring your own if you think you'll be thirsty."
                }
              </p>
            </div>
            <div className={classes.info}>
              <p className={classNames(classes.heavy, classes.label)}>Wear</p>
              <p>
                {
                  "Whatever makes you feel good. We'll be taking the opportunity to wear something fun and fancy."
                }
              </p>
            </div>
            <div className={classes.info}>
              <p className={classNames(classes.heavy, classes.label)}>
                Sleeping
              </p>
              <p>
                {
                  "There are some options within walking distance if you want a bed. Contact us about that. There's unlimited floor and tenting space."
                }
              </p>
            </div>
            <p style={{ marginTop: "32px" }}>
              {
                "We'll update this page as more details become clear, so check back here before you come. Also, parking is going to require a plan :). No gifts, please."
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
