import React from "react";
import { shallow } from "enzyme";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../config/icons";
import ListItemLink from "../../components/ListItemLink";

it("renders without crashing", () => {
  let props;
  let wrapper;

  props = {
    to: "/",
    primary: "Home",
    icon: <FontAwesomeIcon icon={"home"} />,
    handleClick: jest.fn(),
  };
  wrapper = shallow(
    <Drawer>
      <List>
        <ListItemLink {...props} />
      </List>
    </Drawer>
  );
  expect(wrapper).toMatchSnapshot();

  props = {
    to: "/",
    primary: "Home",
  };
  wrapper = shallow(
    <Drawer>
      <List>
        <ListItemLink {...props} />
      </List>
    </Drawer>
  );
  expect(wrapper).toMatchSnapshot();
});
