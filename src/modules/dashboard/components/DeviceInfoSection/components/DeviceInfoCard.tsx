type DeviceInfoCardProps = {
  compressor_power?: number
  defrost_power?: number
  evap_fan_power?: number
}

export default function DeviceInfoCard({
  compressor_power,
  defrost_power,
  evap_fan_power,
}: DeviceInfoCardProps) {
  return (
    <div className="card bg-white text-primary-content shadow-xl">
      <div className="card-body">
        <h1 className="card-title text-2xl mb-1">Potências</h1>
        <div className="flex justify-between mb-7">
          <div>
            <p className="text-lg font-semibold">Compressor</p>
            <p className="text-2xl">{compressor_power} HP</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Resistência de degelo</p>
            <p className="text-2xl">{defrost_power} HP</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Ventilador da evaporadora</p>
            <p className="text-2xl">{evap_fan_power} HP</p>
          </div>
        </div>
      </div>
    </div>
  )
}
