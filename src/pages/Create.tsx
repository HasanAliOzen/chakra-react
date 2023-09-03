import { ActionFunctionArgs, Form, redirect } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

const Create = () => {
  return (
    <Box maxW={"800px"}>
      <Form method="post" action="/create">
        <FormControl isRequired mb={"20px"}>
          <FormLabel>Task name :</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Enter a descriptive task name.</FormHelperText>
        </FormControl>

        <FormControl isRequired mb={"20px"}>
          <FormLabel>Task description :</FormLabel>
          <Textarea
            placeholder="Enter a detailed description for the task..."
            name="description"
          />
        </FormControl>

        <FormControl mb={"20px"} display={"flex"} alignItems={"center"}>
          <Checkbox name="isPriority" size={"lg"} colorScheme="green" />
          <FormLabel mb={0} ml={"10px"}>
            Make this a priority taks.
          </FormLabel>
        </FormControl>

        <Button type="submit">Submit</Button>
      </Form>
    </Box>
  );
};

export default Create;

export const createAction = async ({ request }: ActionFunctionArgs) => {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    author: "Mario",
    img: "/img/mario.png",
  };

  await fetch("http://localhost:8000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  return redirect("/");
};
