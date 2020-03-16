import React, { useEffect } from "react";
import useSocket from "use-socket.io-client";
import { urls, socket_events } from "../../config";
import GoogleMap from "./googleMap";
import { userActions } from "../../actions";
import { useDispatch, useSelector } from "react-redux";

export default function Map() {
  const userData = useSelector(state => state.userReducer.data);
  const dispatch = useDispatch();
  const [socket] = useSocket(urls.SOCKET);
  useEffect(() => {
    dispatch(userActions.fetchUserThunk());
    socket.connect();
    const updateLocation = data => dispatch(userActions.updateUser(data));
    socket.on(socket_events.LOCATION_UPDATE, updateLocation);
  }, []);
  return <GoogleMap userData={userData} />;
}
