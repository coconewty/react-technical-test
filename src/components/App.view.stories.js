import React from "react";
import AppView from "./App.view";
import { catData } from "../utilities/apiMock";

export default {
  title: "App",
  component: AppView,
};

const Template = (args) => <AppView {...args} />;

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  catData: [],
  fetchError: false,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  catData: [],
  fetchError: false,
};

export const FetchError = Template.bind({});
FetchError.args = {
  isLoading: false,
  catData: [],
  fetchError: true,
};

export const Loaded = Template.bind({});
Loaded.args = {
  isLoading: false,
  catData: catData,
  fetchError: false,
};
