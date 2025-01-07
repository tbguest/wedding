import classes from "./IndexPage.module.css";
import AttendeeForm from "@/components/AttendeeForm/AttendeeForm";
import { GiDandelionFlower } from "react-icons/gi";
import { Footer } from "../Footer";
import classNames from "classnames";
import Head from "next/head";

export const IndexPage = () => {
  return (
    <>
      <Head>
        <title>L+T</title>
        <meta property="og:title" content={"L+T"} key="title" />
      </Head>
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
                {"2078 Highway 329, The Lodge, Nova Scotia (our place). "}
                <b>Parking at 2118 Highway 329.</b>
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
                  "Whatever makes you feel good. We'll be taking the opportunity to wear something fun and fancy. "
                }
                <b>
                  {
                    "Expect the ground to be a bit soft. You might have a hard time in pointy heels."
                  }
                </b>
              </p>
            </div>
            <div className={classes.info}>
              <p className={classNames(classes.heavy, classes.label)}>
                Sleeping
              </p>
              <p>
                {
                  "There are some options within walking distance if you want a bed. Contact us about that. There's unlimited floor and tenting space."
                }{" "}
                <b>
                  {
                    "If you're hoping to sleep under a roof, get in touch with us in advance."
                  }
                </b>
              </p>
            </div>
            <div className={classes.info}>
              <p
                className={classNames(classes.heavy, classes.label)}
              >
                Parking
              </p>
              <p>
                {
                  "Most parking will be available at 2118 Highway 329 (Tristan's parents' place). From there you'll have to walk about 200 m through the woods to get to the venue. If you don't think you'll be up for the walk, please let us know, and we'll make a closer option available to you! There's a local cab service that will be available to get you around within the neighbourhood (Lucky Cab: 902 222-6213)."
                }{" "}
                <b>
                  {"Parking will be tight. Carpool if you can."}
                </b>
              </p>
            </div>
            <p style={{ marginTop: "32px" }}>
              {
                "We're super excited to see you on the 2nd. Get in touch with Laura or Tristan if you have questions about access or anything else."
              }
            </p>
            <p>
              {
                "If there's a story, anecdote, or something else you'd like to share publicly, there will be an opportunity."
              }
            </p>
            <p>{"No gifts, please."}</p>
          </section>
          <GiDandelionFlower size={64} style={{ margin: 32 }} />
          <AttendeeForm />
        </div>
      </main>
      <Footer />
    </>
  );
};
