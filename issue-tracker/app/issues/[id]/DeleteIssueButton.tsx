import { Button, Flex } from "@radix-ui/themes";
import React from "react";
import { FaRecycle } from "react-icons/fa";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button color="red" size="1" variant="solid">
      <FaRecycle />
      Delete Issue
    </Button>
  );
};

export default DeleteIssueButton;
