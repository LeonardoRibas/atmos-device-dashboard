import RealTimeInfoCard from './components/RealTimeInfoCard'
import { FaTemperatureLow } from 'react-icons/fa6'
import { SiWindicss } from 'react-icons/si'
import { FaWifi } from 'react-icons/fa'
type RealTimeInfoSectionProps = {
  temp_1?: number
  temp_2?: number
  rssi?: number
}

export default function RealTimeInfoSection({
  temp_1,
  temp_2,
  rssi,
}: RealTimeInfoSectionProps) {
  return (
    <div className="flex flex-col sm:flex-row md:gap-16 gap-4 mb-8">
      <RealTimeInfoCard
        icon={<FaTemperatureLow size="2rem" color="#5DD629" />}
        title="Temperatura Interna"
        value={temp_1}
      />
      <RealTimeInfoCard
        icon={<SiWindicss size="2rem" color="#5DD629" />}
        title="Temperatura da Evaporadora"
        value={temp_2}
      />
      <RealTimeInfoCard
        icon={<FaWifi size="2rem" color="#5DD629" />}
        title="Intensidade Wifi"
        value={rssi}
      />
    </div>
  )
}
