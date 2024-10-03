"use client";
import React from 'react'
import { useState } from 'react';
import { APIProvider,Map,Pin,InfoWindow, Marker } from '@vis.gl/react-google-maps'
export const Gmap = () => {
    const gMapPosition = {lat: 51.17079818472753, lng:-114.16830533845202};
    const [openMap, setOpen] = useState(false)
  return (
    <APIProvider apiKey='AIzaSyAN55nfOEffDzItz7pmEpt2nVpQKtOy45o'>
        <div id="googleMap">
            <Map defaultZoom={16} defaultCenter={gMapPosition} >
              <Marker position={gMapPosition} onClick={()=> setOpen(true)}></Marker>
              {openMap && (<InfoWindow position={gMapPosition} onCloseClick={()=>setOpen(false)}>
                <a style={{fontSize:"1.25em", fontWeight:"bold"}} href="https://www.google.com/maps/place/Tarora+Rejuvenation/@51.17066,-114.167735,49m/data=!3m1!1e3!4m6!3m5!1s0x537167a7236c6137:0x58935ee107d0114c!8m2!3d51.1706704!4d-114.1683107!16s%2Fg%2F11v19gw6jv?hl=en-US&entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D">
                  50 Nolanridge Ct NW #140
                </a>
              </InfoWindow>)}
            </Map>
        </div>
    </APIProvider>
    
  )
}

