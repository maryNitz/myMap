import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyMap from "./Map";

export default function MyTabs() {
  return (
    <Tabs>
      <TabList>
        <Tab>Thailand</Tab>
        <Tab>Mexiko</Tab>
      </TabList>
      <TabPanel>
        <MyMap lat={13.736717} lng={100.523186} locationName="Thailand" />
      </TabPanel>
      <TabPanel>
        <MyMap lat={21.5242176} lng={-87.3749758} locationName="Mexiko" />
      </TabPanel>
    </Tabs>
  );
}
