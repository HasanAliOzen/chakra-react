import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <List color={"white"} fontSize={"xl"}>
      <ListItem>
        <NavLink to="/">
          <ListIcon as={CalendarIcon} color="cyan.700" />
          Dashboard
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/create">
          <ListIcon as={EditIcon} color="cyan.700" />
          Create
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/profile">
          <ListIcon as={AtSignIcon} color="cyan.700" />
          Profile
        </NavLink>
      </ListItem>
    </List>
  );
};

export default Sidebar;
