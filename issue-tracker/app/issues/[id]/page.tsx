import StatusBagde from "@/app/components/StatusBadge";
import prisma from "@/prisma/client";
import { Box, Card, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params: { id } }: Props) => {
  if (typeof parseInt(id) !== "number") return notFound();
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) notFound();
  return (
    <Box width="400px">
      <Card variant="classic" className="space-y-3 bg-green-300">
        <Text as="div" color="green" size="4" weight="bold">
          {issue.title}
        </Text>
        <StatusBagde status={issue.status} />
        <Text as="div" color="gray" size="3">
          {issue.description}
        </Text>
        <Text as="p">{issue.createdAt.toDateString()}</Text>
      </Card>
    </Box>
  );
};

export default IssueDetailPage;
