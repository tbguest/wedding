import { User } from "@prisma/client";
import React from "react";
import { useForm } from "react-hook-form";

type FormValues = Omit<User, "attending"> & {
  attending: string;
};

export default function AttendeeForm() {
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

  const onSubmit = (data: FormValues) => {
    let attending = false;
    if (data.attending === "yes") {
      attending = true;
    }
    fetch("/api/create-attendee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, attending }),
    });
  };

  const name = watch("name");

  return (
    <>
      <form method="post" onSubmit={handleSubmit(onSubmit)}>
        <p>
          <label>
            <input
              type="radio"
              value="yes"
              {...register("attending", { required: true })}
            />{" "}
            Yes
          </label>
          <label>
            <input type="radio" name="attending" value="no" /> No
          </label>
        </p>
        <hr />
        <label>
          Name:{" "}
          <input {...register("name", { required: true })} defaultValue="" />
        </label>
        {errors.name && <span>This field is required</span>}
        <hr />
        <label>
          Message: <input {...register("message")} defaultValue="" />
        </label>
        <hr />
        <button type="submit" disabled={!name}>
          Submit form
        </button>
      </form>
    </>
  );
}
