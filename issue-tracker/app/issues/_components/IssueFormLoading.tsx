import { Button } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";

const IssueFormLoading = () => {
  return (
    <div className="max-w-2xl space-y-4">
      <form className="space-y-4">
        <h3 className="font-bold">Create New Issue</h3>

        <Skeleton height="2rem" />
        <Skeleton height="20rem" />

        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default IssueFormLoading;
