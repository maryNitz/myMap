import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyMap from "./MyMap";

export default function MyTabs(props) {
  const tabList = (
    <TabList>
      {props.tabs.map((e) => (
        <Tab>{e.name}</Tab>
      ))}
    </TabList>
  );

  const tabPanels = props.tabs.map((e, i) => (
    <TabPanel>
      <div>
        <MyMap lat={e.lat} lng={e.lng} markers={e.markers} />
      </div>
    </TabPanel>
  ));

  return (
    <Tabs>
      {tabList}
      {tabPanels}
    </Tabs>
  );
}
