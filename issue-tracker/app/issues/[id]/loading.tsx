import { Box, Card, Grid } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";

const loading = () => {
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="2">
      <Box width="90%">
        <Card variant="classic" className="space-y-3 bg-green-300">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </Card>
      </Box>

      <Box></Box>
    </Grid>
  );
};

export default loading;
