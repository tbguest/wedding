import React from "react";
import { Prisma } from "@prisma/client";
import { useForm } from "react-hook-form";
import { useCreateAttendee } from "@/hooks/use-create-attendee";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import classes from "./AttendeeForm.module.css";
import classNames from "classnames";

type FormValues = Omit<Prisma.UserCreateInput, "attending"> & {
  attending: string;
};

export default function AttendeeForm() {
  const { mutate, isLoading, isSuccess } = useCreateAttendee();

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

  const submitDisabled = isLoading || isSuccess;

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
            disabled={submitDisabled}
            className={classNames(classes.radioInput, {
              [classes.radioInput]: submitDisabled,
            })}
            {...register("attending", { required: true })}
          />{" "}
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            {...register("attending", { required: true })}
            disabled={submitDisabled}
            className={classNames(classes.radioInput, {
              [classes.radioInput]: submitDisabled,
            })}
          />{" "}
          No
        </label>
      </p>
      <label>
        <div className={classes.visuallyHidden}>Name: </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            width: "100%",
          }}
        >
          <input
            {...register("name", { required: true })}
            placeholder="Who are you?"
            disabled={submitDisabled}
            className={classNames(classes.input, {
              [classes.required]: errors.name,
            })}
          />
          {errors.name && (
            <p style={{ color: "red", marginTop: 4 }}>
              Please identify yourself
            </p>
          )}
        </div>
      </label>
      <label>
        <div className={classes.visuallyHidden}>Others: </div>
        <input
          {...register("additions")}
          defaultValue=""
          placeholder="Anyone else you think might come with you?"
          disabled={submitDisabled}
          className={classes.input}
        />
      </label>
      <label>
        <div className={classes.visuallyHidden}>Message: </div>
        <textarea
          {...register("message")}
          defaultValue=""
          placeholder="Message (optional)"
          disabled={submitDisabled}
          className={classes.input}
        />
      </label>
      <div className={classes.buttonRow}>
        <button
          type="submit"
          disabled={submitDisabled}
          className={classNames(classes.button, {
            [classes.buttonClicked]: isSuccess,
          })}
        >
          {isSuccess ? (
            <p className={classes.buttonText}>Thanks!</p>
          ) : isLoading ? (
            <LoadingSpinner />
          ) : (
            <p className={classes.buttonText}>Submit</p>
          )}
        </button>
      </div>
    </form>
  );
}
