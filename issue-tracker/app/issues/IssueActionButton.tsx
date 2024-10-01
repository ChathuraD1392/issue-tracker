import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssueActionButton = () => {
  return (
    <Button>
      <Link href="/issues/new">Add an Issue</Link>
    </Button>
  );
};

export default IssueActionButton;
