import DeviceInfoCard from './components/DeviceInfoCard'
import * as dayjs from 'dayjs'

type DeviceInfoSectionProps = {
  compressor_power?: number
  defrost_power?: number
  evap_fan_power?: number
  fwVer?: {
    requestDate: Date
    version: string
  }
  installDate?: Date
}

export default function DeviceInfoSection({
  compressor_power,
  defrost_power,
  evap_fan_power,
  fwVer,
  installDate,
}: DeviceInfoSectionProps) {
  return (
    <>
      <DeviceInfoCard
        compressor_power={compressor_power}
        defrost_power={defrost_power}
        evap_fan_power={evap_fan_power}
      />
      <div className="ml-8">
        <h1 className="card-title text-2xl mb-4 mt-8">Informações Gerais</h1>
        <div className="flex gap-16 mb-7">
          <div>
            <p className="text-lg font-semibold">Versão do firmware</p>
            <p className="text-md">{fwVer?.version}</p>
            <p className="text-md">
              ultima atualização{' '}
              {dayjs(fwVer?.requestDate).format('DD/MM/YYYY')}
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold">Data de instalação</p>
            <p className="text-md">{dayjs(installDate).format('DD/MM/YYYY')}</p>
          </div>
        </div>
      </div>
    </>
  )
}
