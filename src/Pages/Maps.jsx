import {GoogleApiWrapper} from 'google-maps-react';
 import React from 'react'
// ...
 
export class MapContainer extends React.Component {}
const LoadingContainer = (props) => (
    <div>Fancy loading container!</div>
  )
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBRbGfNhsLe8wgQD1Gnm5RHUZqk38J1au4"),
  LoadingContainer: LoadingContainer
})(MapContainer)