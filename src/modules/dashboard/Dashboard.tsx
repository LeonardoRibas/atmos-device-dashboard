import useFetchDeviceInfo from './components/DeviceInfoSection/hooks/useFetchDeviceInfo'
import useRealTimeInfo from './hooks/useRealTimeInfo'
import DeviceInfoSection from './components/DeviceInfoSection'

import Header from './components/Header'
import { ping } from 'ldrs'
import RealTimeInfoSection from './components/RealTimeInfoSection'
ping.register()

export default function Dashboard() {
  const { data, loading, error } = useFetchDeviceInfo(
    'http://35.247.217.209/api/installation-meter/65c1267706b0ff9cb40357d0',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTU3YTA5YWY5ODFiYTUyODc3ZjAzNiIsImlhdCI6MTY3ODgzODgxM30.F5Icoma-bOswkRmKpjYjmAQrXE32CM9kAQ0D2S0JgPY'
  )

  const { message, isConnected } = useRealTimeInfo(
    'ws://broker.emqx.io:8083/mqtt',
    'testtopic/react'
  )

  if (loading) {
    return (
      <span className="loading loading-spinner loading-lg text-gray-900"></span>
    )
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div className="flex w-max-80 h-full flex-col bg-white p-14 rounded-3xl text-gray-900 ">
      <Header
        name={data?.name}
        comment={data?.comment}
        meter={data?.meter}
        isConnected={isConnected}
      />
      <RealTimeInfoSection
        temp_1={message?.temp_1}
        temp_2={message?.temp_2}
        rssi={message?.rssi}
      />
      <DeviceInfoSection
        compressor_power={data?.compressor_power}
        defrost_power={data?.defrost_power}
        evap_fan_power={data?.evap_fan_power}
        fwVer={data?.fwVer}
        installDate={data?.installDate}
      />
    </div>
  )
}
