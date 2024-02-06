interface IRoot {
  ok: boolean
  type: string
  installationMeter: InstallationMeter
}
interface IInstallationMeter {
  fwVer: FwVer
  fuseBoxMeter: boolean
  equipment: string
  active: boolean
  voltage: number
  timezone: string
  tags: any[]
  code: string
  name: string
  installDate: Date
  meter: string
  equipmentID: string
  solarPanel: boolean
  alias: string
  comment: string
  establishmentId: string
  equipmentType: number
  createdAt: string
  installationMetaData: InstallationMetaData
  compressor_power: number
  defrost_power: number
  evap_fan_power: number
  mac: string
  dateObsInit: string
  dateObsEnd: string
  impediment: Impediment[]
}

interface IFwVer {
  requestDate: string
  version: string
}

interface IInstallationMetaData {
  reason: string
  payload: Payload
  lastCommandId: any
  CEP: any
  emailUser: any
  alias: any
  uC: any
  uc: any
}

interface IPayload {
  estabID: string
  estabAlias: string
  macAlias: string
  equipID: string
}

interface IImpediment {
  reasons: any[]
  isImpediment: boolean
}

interface ITelemetry {
  mac: string // Identificador do dispositivo
  temp_1: number // Temperatura interna
  temp_2: number // Temperarura da evaporadora
  rssi: number // Intensidade do sinal Wifi
  date: number // Data de envio da mensagem
  compressor_buffer: string // Lista de acionamentos do compressor
  evap_fan_buffer: string // Lista de acionamentos do ventilador da evaporadora
  defrost_buffer: string // Lista de acionamentos do degelo
  open_door_buffer: string // Lista de aberturas de porta
}
