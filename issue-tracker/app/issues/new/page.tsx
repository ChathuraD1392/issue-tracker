"use client";
import { Button, Callout, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import React, { useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

interface IssueFormData {
  title: string;
  description: string;
}
const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueFormData>();
  const [error, setError] = useState("");
  const router = useRouter();
  const onSubmit = async (data: FieldValues) => {
    try {
      await axios.post("/api/issuesx", data);
      router.push("/issues");
    } catch (err) {
      setError("An Unexpected Error Occured.");
    }
  };
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
        <TextField.Root placeholder="Title" {...register("title")}>
          <TextField.Slot></TextField.Slot>
        </TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        ></Controller>
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
