import mapbox from 'mapbox-gl';

// https://docs.mapbox.com/help/glossary/access-token/
//mapbox.accessToken = MAPBOX_ACCESS_TOKEN;

let tokenMap = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGF0cmljZXAzMyIsImEiOiJjbDBpM20zbHMwMGF3M2pxb2pjZ2VqMTEzIn0.fgawHMdr-Sffy5K1XpUjLQ'
mapbox.accessToken = tokenMap

const key = {};

export { mapbox, key };