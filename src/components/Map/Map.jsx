import React, { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useSearchParams } from 'react-router-dom'
function Map({ mapMarker }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');

    const [center, setCenter] = useState([lat || 51.505, lng || -0.09])
    return (
        <div className='mapKeeper'>
            <MapContainer className='map' center={center} zoom={13} scrollWheelZoom={true}>
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
