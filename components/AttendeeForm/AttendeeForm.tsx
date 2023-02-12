import React from "react";
import { Prisma } from "@prisma/client";
import { useForm } from "react-hook-form";
import { useCreateAttendee } from "@/hooks/use-create-attendee";
import classes from "./AttendeeForm.module.css";

type FormValues = Omit<Prisma.UserCreateInput, "attending"> & {
  attending: string;
};

// TODO: tabbable button

export default function AttendeeForm() {
  const { mutate } = useCreateAttendee();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      attending: "yes",
    },
  });
  const name = watch("name");

  const onSubmit = (data: FormValues) => {
    let attending = false;
    if (data.attending === "yes") {
      attending = true;
    }
    mutate({ ...data, attending });
  };

  return (
    <form
      method="post"
      onSubmit={handleSubmit(onSubmit)}
      className={classes.form}
    >
      <h2>Are you coming?</h2>
      <p className={classes.radio}>
        <label>
          <input
            type="radio"
            value="yes"
            className={classes.radioInput}
            {...register("attending", { required: true })}
          />{" "}
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="attending"
            value="no"
            className={classes.radioInput}
          />{" "}
          No
        </label>
      </p>
      <label>
        <div className={classes.visuallyHidden}>Name: </div>
        <input
          {...register("name", { required: true })}
          defaultValue=""
          placeholder="Who are you?"
          className={classes.input}
        />
      </label>
      {errors.name && <span>This field is required</span>}
      <label>
        <div className={classes.visuallyHidden}>Others: </div>
        <input
          {...register("additions")}
          defaultValue=""
          placeholder="Anyone else you think might come with you?"
          className={classes.input}
        />
      </label>
      <label>
        <div className={classes.visuallyHidden}>Message: </div>
        <textarea
          {...register("message")}
          defaultValue=""
          placeholder="Message (optional)"
          className={classes.input}
        />
      </label>
      <div className={classes.buttonRow}>
        <button type="submit" disabled={!name}>
          Submit
        </button>
      </div>
    </form>
  );
}
