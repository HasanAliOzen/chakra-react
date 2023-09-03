import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  return (
    <Grid>
      <Navbar />
      <Grid templateColumns="repeat(6,1fr)">
        <GridItem
          as="aside"
          colSpan={{ base: 6, md: 1 }}
          bg="teal.400"
          minW={{ base: "100%", md: "250px" }}
          maxW={{ base: "100%", md: "250px" }}
          minHeight={{ base: "10", md: "100vh" }}
          p={{ base: "5" }}
        >
          <Sidebar />
        </GridItem>
        <GridItem as="main" colSpan={{ base: 6, md: 5 }} px={10} py={10}>
          <Outlet />
        </GridItem>
      </Grid>
    </Grid>
  );
};

export default RootLayout;
