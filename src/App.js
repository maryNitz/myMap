import "./App.css";
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
          {
            name: "Dänemark",
            lat: 56.0688503,
            lng: 10.481165,
            markers: [
              { lat: 55.73081, lng: 8.9401842, name: "Billund" },
              { lat: 55.2416098, lng: 9.3076997, name: "Hadersleben" },
              { lat: 55.4915878, lng: 9.3365125, name: "Kolding" },
              { lat: 55.6713812, lng: 12.4537369, name: "Kopenhagne" },
            ],
          },
        ]}
      />
    </div>
  );
}

export default App;
