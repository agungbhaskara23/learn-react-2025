import React from 'react'

const makanans = [
    {
        nama: 'Bakso',
        harga: 10000
    },
    {
        nama: 'Mie Ayam',
        harga: 15000
    },
    {
        nama: 'Soto Ayam',
        harga: 20000
    },
    {
        nama: 'Nasi Goreng',
        harga: 13000
    }
];

function Map() {
    return (
        <div>
            <h2>List Makanan dan Harga di Kantin</h2>
            <ul>
                {makanans.map((makanan, index) => (
                    <li key={index}>{index+1}. {makanan.nama} - Harga: {makanan.harga}</li>
                ))}
            </ul>
            <h2>List Makanan di Kantin dibawah 15.000</h2>
            <ul>
                {makanans.filter(makanan => makanan.harga < 15000)
                    .map((makanan, index) => (
                        <li key={index}>{index+1}. {makanan.nama} - Harga: {makanan.harga}</li>
                    ))}
            </ul>
            <h2>Total Harga Makanan di Kantin: {makanans.reduce((acc, cur) => acc+cur.harga, 0)}
            </h2>
        </div>
    )
}

export default Map