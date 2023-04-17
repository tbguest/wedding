import classes from "../AdminPage/AdminPage.module.css";
import { Footer } from "../Footer";
import { useListAttendees } from "@/hooks/use-list-attendees";
import { User } from "@prisma/client";
import classNames from "classnames";
import { format } from "date-fns";

export const AdminPage = () => {
  const { data }: { data?: User[] } = useListAttendees(); // TODO
  console.log("entry.createdAt", data?.[0].createdAt);
  return (
    <>
      <main className={classes.main}>
        <h1 style={{ marginBottom: "16px" }}>Responses</h1>
        <section className={classes.content}>
          <ul className={classes.list}>
            {data?.map((entry, index) => {
              return (
                <li key={index} className={classes.listItem}>
                  <div className={classes.info}>
                    <div className={classNames(classes.heavy, classes.label)}>
                      {entry?.createdAt &&
                        format(new Date(entry.createdAt), "MMM dd HH:mm")}
                    </div>
                    <div>
                      <div>{`${entry.attending ? "✅" : "❌"} ${
                        entry.name
                      }`}</div>
                      <div>{`Additions: ${entry.additions ?? "No"}`}</div>
                      {entry.message && (
                        <div>{`Message: ${entry.message}`}</div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};
