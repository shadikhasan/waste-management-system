import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    useEffect(() => {
        const map = L.map('map').setView([23.909891, 90.402889], 11);

        // Add OpenStreetMap tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Define custom icons for transfer stations and landfills
        const transferStationIcon = L.icon({
            iconUrl: 'https://img.icons8.com/color/48/000000/waste.png',
            iconSize: [48, 48], // Adjust icon size
            iconAnchor: [24, 48] // Adjust icon anchor
        });

        const landfillIcon = L.icon({
            iconUrl: 'https://img.icons8.com/ios-filled/50/000000/trash.png',
            iconSize: [50, 50], // Adjust icon size
            iconAnchor: [25, 50] // Adjust icon anchor
        });

        // Add transfer stations
        const transferStations = [
            { Location: "Section-12, Kabarsthan, Uttara STS", Latitude: 23.871424189, Longitude: 90.380003352, Capacity: 950 },
                { Location: "sector-6, Uttara STS", Latitude: 23.871154642, Longitude: 90.400978342, Capacity: 800 },
                { Location: "Ranabhola, Section-10, Uttara STS", Latitude: 23.885290574, Longitude: 90.38649071, Capacity: 750 },
                { Location: "Kuril Bishwa Road STS", Latitude: 23.82374075, Longitude: 90.421449837, Capacity: 900 },
                { Location: "Nikunja-2, West Side Road-18 STS", Latitude: 23.832563077, Longitude: 90.417706771, Capacity: 850 },
                { Location: "KhilkhetRailgate STS", Latitude: 23.829193029, Longitude: 90.420268179, Capacity: 700 },
                { Location: "Niketan, Gate-02 STS", Latitude: 23.772594538, Longitude: 90.413396837, Capacity: 600 },
                { Location: "Mirpur Ceramic Road STS", Latitude: 23.829523735, Longitude: 90.370601341, Capacity: 1100 },
                { Location: "Mirpur Jalladkhana STS", Latitude: 23.81124235, Longitude: 90.375196381, Capacity: 1050 },
                { Location: "Mirpur DNCC Market STS", Latitude: 23.776158794, Longitude: 90.399892878, Capacity: 950 },
                { Location: "Staff quarter, Mirpur 1 STS", Latitude: 23.794837388, Longitude: 90.353648634, Capacity: 850 },
                { Location: "East Side of Kashli Road, Mirpur STS", Latitude: 23.821963265, Longitude: 90.377630366, Capacity: 800 },
                { Location: "Arambag Culvert, Mirpur STS", Latitude: 23.817887397, Longitude: 90.358673163, Capacity: 750 },
                { Location: "Mirpur Mods Zone, Pallabi STS", Latitude: 23.829766407, Longitude: 90.366046057, Capacity: 700 },
                { Location: "Shialbari Mor, Mirpur STS", Latitude: 23.810658363, Longitude: 90.357950915, Capacity: 650 },
                { Location: "Rainkhola, Mirpur STS", Latitude: 23.805711248, Longitude: 90.351681081, Capacity: 550 },
                { Location: "Vashantek bazar, Mirpur STS", Latitude: 23.812693284, Longitude: 90.392823239, Capacity: 500 },
                { Location: "ManikdiKabarsthan STS", Latitude: 23.824049255, Longitude: 90.393596447, Capacity: 450 },
                { Location: "Banasree STS", Latitude: 23.762602302, Longitude: 90.444467384, Capacity: 900 },
                { Location: "KhilgoanKabarsthan STS", Latitude: 23.747852717, Longitude: 90.431345283, Capacity: 850 },
                { Location: "Tejgoan, Orion Circle STS", Latitude: 23.766489808, Longitude: 90.406101796, Capacity: 950 },
                { Location: "Tejgoan, Begunbari STS", Latitude: 23.762010865, Longitude: 90.402926219, Capacity: 1050 },
                { Location: "Notun Bazar STS", Latitude: 23.798094503, Longitude: 90.426491458, Capacity: 1100 },
                { Location: "Mohammadpur Town Hall STS", Latitude: 23.759728078, Longitude: 90.366403199, Capacity: 600 },
                { Location: "Rayer Bazar STS", Latitude: 23.74467169, Longitude: 90.359645296, Capacity: 400 },
                { Location: "Rayer Bazar Beribadh STS", Latitude: 23.740468723, Longitude: 90.361250839, Capacity: 350 },
                { Location: "Moghbazar STS", Latitude: 23.748892369, Longitude: 90.401565036, Capacity: 300 }
        ];

        transferStations.forEach(station => {
            L.marker([station.Latitude, station.Longitude], { icon: transferStationIcon }).addTo(map)
                .bindPopup(`<b>Transfer Station</b><br>Location: ${station.Location}<br>Capacity: ${station.Capacity}`);
        });

        // Add landfills
        const landfills = [
            { Location: "Boro Bari Landfill", Latitude: 23.936804, Longitude: 90.384783, Capacity: 30000 },
            { Location: "Amin Bazar Landfill", Latitude: 24.053255, Longitude: 90.420189, Capacity: 50000 }
        ];

        landfills.forEach(landfill => {
            const marker = L.marker([landfill.Latitude, landfill.Longitude], { icon: landfillIcon }).addTo(map);
            marker.bindPopup(`<b>Landfill</b><br>Location: ${landfill.Location}<br>Capacity: ${landfill.Capacity}`);
        });

        // Cleanup function
        return () => {
            map.remove();
        };
    }, []);

    return (
        <div className='flex flex-col w-full p-4'>
            <div id="map" className="h-96 text-xl"></div>

            <div id="icon-legend" className="mt-4 flex flex-row justify-center items-center">
                <div className="legend-item flex flex-row p-2">
                    <img src="https://img.icons8.com/color/48/000000/waste.png" alt="Transfer Station Icon" className="w-6 h-6 mr-2" />
                    Secondary Transfer Stations
                </div>
                <div className="legend-item flex flex-row p-2">
                    <img src="https://img.icons8.com/ios-filled/50/000000/trash.png" alt="Landfill Icon" className="w-5 h-5 mr-2" />
                    Landfills
                </div>
            </div>
        </div>
    );
};

export default MapComponent;
