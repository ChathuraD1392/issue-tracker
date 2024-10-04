import { StatusBagde } from "@/app/components";
import { Issue } from "@prisma/client";
import { Card, Text } from "@radix-ui/themes";
import React from "react";
import Markdown from "react-markdown";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <Card variant="classic" className="space-y-3 bg-green-300">
      <Text as="p" color="green" size="4" weight="bold">
        {issue.title}
      </Text>
      <StatusBagde status={issue.status} />
      <div className="prose">
        <Markdown>{issue.description}</Markdown>
      </div>
      <Text as="p">{issue.createdAt.toDateString()}</Text>
    </Card>
  );
};

export default IssueDetails;
