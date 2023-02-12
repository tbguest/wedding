import React from "react";
import { Prisma } from "@prisma/client";
import { useForm } from "react-hook-form";
import { useCreateAttendee } from "@/hooks/use-create-attendee";

type FormValues = Omit<Prisma.UserCreateInput, "attending"> & {
  attending: string;
};

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
  );
}
