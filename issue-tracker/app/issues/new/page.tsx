import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const page = () => {
  return (
    <div className="max-w-2xl space-y-4">
      <h3>Create New Issue</h3>
      <TextField.Root placeholder="Title">
        <TextField.Slot></TextField.Slot>
      </TextField.Root>
      <TextArea placeholder="Dwscription" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default page;
