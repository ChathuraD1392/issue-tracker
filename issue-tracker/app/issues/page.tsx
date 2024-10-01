import prisma from "@/prisma/client";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import StatusBagde from "../components/StatusBadge";

const IssuePage = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <div className="max-w-2xl space-y-5">
      <Button>
        <Link href="/issues/new">Add an Issue</Link>
      </Button>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>S/N</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Description
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
                {issue.title}
                <div className="block md:hidden">
                  <StatusBagde status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <StatusBagde status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.description}
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
