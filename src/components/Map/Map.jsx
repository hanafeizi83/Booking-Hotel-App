import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { useSearchParams } from 'react-router-dom';

function Map({ mapMarker }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');
    const [center, setCenter] = useState([51.505, -0.09]);

    useEffect(() => {
        if (lat, lng) setCenter([lat, lng])
    }, [lat, lng]);

    return (
        <div className='mapKeeper'>
            <MapContainer className='map' center={center} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ChangeCenter position={center} />
                {
                    mapMarker.map(item => {
                        return <Marker key={item.id} position={[item.latitude, item.longitude]}>
                            <Popup>
                                {item.host_location}
                            </Popup>
                        </Marker>
                    })
                }

            </MapContainer>
        </div>
    )
}

export default Map

function ChangeCenter({ position }) {
    const map = useMap();
    map.setView(position)
    return null;
}