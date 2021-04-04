import React from "react";
import * as Styled from "./styles";
import CatFactView from "./CatFact.view";
import { catData } from "../utilities/apiMock";

export default {
  title: "CatFact",
  component: CatFactView,
};

const dataItem = catData[0];

const Template = (args) => (
  <Styled.Page>
    <CatFactView {...args} />
  </Styled.Page>
);

export const Default = Template.bind({});
Default.args = {
  pageOrderIndex: 0,
  text: dataItem.text,
  newText: dataItem.text,
  isVerified: true,
  isEditable: false,
};

export const Editable = Template.bind({});
Editable.args = {
  pageOrderIndex: 0,
  text: dataItem.text,
  newText: dataItem.text,
  isVerified: true,
  isEditable: true,
};

export const Edited = Template.bind({});
Edited.args = {
  pageOrderIndex: 0,
  text: dataItem.text,
  newText: "This is some new text.",
  isVerified: true,
  isEditable: true,
};
