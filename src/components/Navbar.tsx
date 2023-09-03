import { UnlockIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";

const Navbar = () => {
  const toast = useToast();

  const handleLogout = () => {
    toast({
      title: "Logout",
      description: "You have been logged out.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
      icon: <UnlockIcon />,
    });
  };

  return (
    <Flex as="nav" p="10px" alignItems="center" h="75px" bg="gray.900">
      <Heading as="h1" size="lg">
        Dojo Tasks
      </Heading>
      <Spacer />

      <HStack spacing="20px">
        <Avatar src="/img/mario.png" size="md">
          <AvatarBadge width="1.3em" bg={"teal.400"}>
            <Text fontSize="xs" color={"white"}>
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>hasanali.ozen@outlook.com</Text>
        <Button colorScheme="teal" onClick={handleLogout}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
