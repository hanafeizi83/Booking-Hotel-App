import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
function Map({ mapMarker }) {
    return (
        <div className='mapKeeper'>
            <MapContainer className='map' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    mapMarker.map(item => {
                        return <Marker position={[item.latitude || 51.505, item.longitude || -0.09]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    })
                }

            </MapContainer>
        </div>
    )
}

export default Map
