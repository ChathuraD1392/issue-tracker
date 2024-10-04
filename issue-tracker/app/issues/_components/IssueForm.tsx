"use client";
import { ErrorMessage } from "@/app/components";
import { createIssueSchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Issue } from "@prisma/client";
import { Button, Callout, Spinner, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { z } from "zod";
import SimpleMDE from "react-simplemde-editor";

type IssueData = z.infer<typeof createIssueSchema>;

const IssueForm = async ({ issue }: { issue?: Issue }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueData>({
    resolver: zodResolver(createIssueSchema),
  });

  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    setSubmitting(true);
    try {
      if (issue) await axios.patch("/api/issues/" + issue.id, data);
      else await axios.post("/api/issues", data);
      router.push("/issues");
      router.refresh();
      setSubmitting(false);
    } catch (err) {
      setError("An Unexpected Error Occured.");
      setSubmitting(false);
    }
  };
  console.log(error);
  return (
    <div className="max-w-2xl space-y-4">
      {error && (
        <Callout.Root color="red">
          <Callout.Icon>
            <MdOutlineReportGmailerrorred />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="font-bold">Create New Issue</h3>
        <TextField.Root
          defaultValue={issue?.title}
          placeholder="Title"
          {...register("title")}
        >
          <TextField.Slot></TextField.Slot>
        </TextField.Root>
        <ErrorMessage children={errors.title?.message} />
        <Controller
          name="description"
          defaultValue={issue?.description}
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        ></Controller>
        <ErrorMessage children={errors.description?.message} />
        <Button disabled={isSubmitting}>
          {isSubmitting && <Spinner />}
          {issue ? "Update Issue" : "Submit New Issue"}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
