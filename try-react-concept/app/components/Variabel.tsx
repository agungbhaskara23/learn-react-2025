import React from 'react'

export const Variabel = () => {
    const harga = 30000;
    let harga2 = 20000
    
    if(true){ //Tidak mengubah nilai harga2
        let harga2 = 25000
    }

    if(true){ //Tidak mengubah nilai harga
        const harga = 25000
    }

    if(true){ //Mengubah nilai harga2
        harga2 = 25000
    }

    return (
    <div>
        <h2>{harga}</h2>
        <h2>{harga2}</h2>
    </div>
  )
}
