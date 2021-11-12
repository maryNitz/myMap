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
        <div>
          <MyMap
            lat={13.736717}
            lng={100.523186}
            locationName="Thailand"
            marker={[
              { lat: 13.736717, lng: 100.523186, name: "Bangkok" },
              { lat: 9.7351317, lng: 99.951336, name: "Koh Phangan" },
              { lat: 18.6942638, lng: 97.6684013, name: "Chang Mai" },
              { lat: 9.5013977, lng: 99.8613252, name: "Koh Samui" },
            ]}
          />
        </div>
      </TabPanel>
      <TabPanel>
        <div>
          <MyMap
            lat={21.5242176}
            lng={-87.3749758}
            locationName="Mexiko"
            marker={[
              { lat: 21.1216056, lng: -86.9893201, name: "Cancún" },
              { lat: 20.2096971, lng: -87.5068956, name: "Tulum" },
              { lat: 21.5242176, lng: -87.3749758, name: "Holbox" },
            ]}
          />
        </div>
      </TabPanel>
    </Tabs>
  );
}
