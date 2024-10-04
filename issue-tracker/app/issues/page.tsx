import prisma from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import { NextLink, StatusBagde } from "@/app/components";
import IssueActionButton from "./IssueActionButton";

const IssuePage = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <div className="max-w-2xl space-y-5">
      <IssueActionButton />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>S/N</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created At
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue, index) => (
            <Table.Row key={index}>
              <Table.Cell>{++index}</Table.Cell>
              <Table.Cell>
                <NextLink href={`/issues/${issue.id}`}>{issue.title}</NextLink>
                <div className="block md:hidden">
                  <StatusBagde status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <StatusBagde status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default IssuePage;
