import { useState, useEffect } from 'react'
import './styles.css'

export default function Dashboard() {
  const [data, setData] = useState<any>({})

  useEffect(() => {
    fetch(
      'http://35.247.217.209/api/installation-meter/65c1267706b0ff9cb40357d0',
      {
        headers: {
          'x-access-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTU3YTA5YWY5ODFiYTUyODc3ZjAzNiIsImlhdCI6MTY3ODgzODgxM30.F5Icoma-bOswkRmKpjYjmAQrXE32CM9kAQ0D2S0JgPY',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.installationMeter)
      })
      .catch(() => alert('Erro ao buscar dados da API'))
  }, [])

  return (
    <>
      {data && (
        <div className="container">
          <div className="mainContainer">
            <h1>{data.name}</h1>
            <h2>Potencias</h2>
            <div className="pontecyContainer">
              <p>{data.compressor_power}</p>
              <p>{data.defrost_power}</p>
              <p>{data.evap_fan_power}</p>
            </div>
            <h1>Informações do dispositivo</h1>
            <h2>Versão de firmware</h2>
            <p>{data.fwVer?.version}</p>
            <p>{data.fwVer?.requestDate}</p>
            <h2>Comment</h2>
            <p>{data.comment}</p>
            <h2>Meter</h2>
            <p>{data.meter}</p>
          </div>
          <div className="mainContainer"></div>
        </div>
      )}
    </>
  )
}
