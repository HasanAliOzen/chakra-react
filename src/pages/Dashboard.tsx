import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

interface Task {
  id: number;
  title: string;
  description: string;
  author: string;
  img: string;
}

const Dashboard = () => {
  const tasks = useLoaderData() as Task[];

  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks.map((task) => (
        <Card key={task.id} borderTop={"2"}>
          <CardHeader>
            <Flex gap={5}>
              <Avatar src={task.img} size="md" />
              <Box>
                <Heading as="h3" size="md">
                  {task.title}
                </Heading>
                <Text>by {task.author}</Text>
              </Box>
            </Flex>
          </CardHeader>

          <CardBody>
            <Text>{task.description}</Text>
          </CardBody>

          <Divider />

          <CardFooter>
            <HStack>
              <Button variant={"outline"} leftIcon={<ViewIcon />}>
                Watch
              </Button>
              <Button variant={"outline"} leftIcon={<EditIcon />}>
                Comment
              </Button>
            </HStack>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default Dashboard;

export const tasksLoader = async () => {
  const res = await fetch("http://localhost:8000/tasks");

  return res.json();
};
