import React, { Component } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import { api_keys } from "../../config";
class GoogleMap extends Component {
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };

  displayMarkers = () => {
    return this.props.userData.map((user, index) => {
      let { latitude, longitude, name, avatar, phone } = user;
      return (
        <Marker
          key={index}
          id={index}
          name={name}
          avatar={avatar}
          phone={phone}
          position={{
            lat: latitude,
            lng: longitude
          }}
          onClick={this.onMarkerClick}
        />
      );
    });
  };

  render() {
    if (!this.props.loaded) return <div>Loading...</div>;
    const { avatar, name, phone } = this.state.selectedPlace;

    return (
      <Map
        className="map"
        google={this.props.google}
        onClick={this.onMapClicked}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
        style={{ height: "100%", width: "100%" }}
        zoom={10}
      >
        {this.displayMarkers()}

        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <img
              style={{ height: 50, width: 50, borderRadius: 10 }}
              src={avatar}
            />
            <div style={{ marginLeft: 10 }}>
              {name}
              <br />
              {phone}
            </div>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: api_keys.GOOGLE_API_KEY
})(GoogleMap);
