
import './App.css';
import GoogleMapReact from 'google-map-react';

const Map = () => {
  const defaultProps = {
    center: {
      lat: 37.7749,
      lng: -122.4194
    },
    zoom: 11
  };

  return (
    <div>
      <GoogleMapReact
        bootstrapURLKeys={ {key: "YOUR API KEY HERE"}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}/>
    </div>
  )
  }

function App() {
  return (
    <div className="App">
      <h1>learn API</h1>
      <Map/>
      
    </div>
  );
}

export default App;
