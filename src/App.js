import "./App.css";
import MyMap from "./components/MyMap";
import MyTabs from "./components/MyTabs";

function App() {
  return (
    <div style={{ padding: 10 }}>
      <h1>My favorite spots around the world.</h1>
      <MyTabs
        tabs={[
          {
            name: "Thailand",
            lat: 13.736717,
            lng: 100.523186,
            markers: [
              { lat: 13.736717, lng: 100.523186, name: "Bangkok" },
              { lat: 9.7351317, lng: 99.951336, name: "Koh Phangan" },
              { lat: 18.6942638, lng: 97.6684013, name: "Chang Mai" },
              { lat: 9.5013977, lng: 99.8613252, name: "Koh Samui" },
            ],
          },
          {
            name: "Mexiko",
            lat: 21.5242176,
            lng: -87.3749758,
            markers: [
              { lat: 21.1216056, lng: -86.9893201, name: "Cancún" },
              { lat: 20.2096971, lng: -87.5068956, name: "Tulum" },
              { lat: 21.5242176, lng: -87.3749758, name: "Holbox" },
            ],
          },
        ]}
      />
    </div>
  );
}

export default App;
