/// <reference types="vite/client" />

export interface Root {
  ok: boolean
  type: string
  installationMeter: InstallationMeter
}

export interface InstallationMeter {
  fwVer: FwVer
  fuseBoxMeter: boolean
  equipment: string
  active: boolean
  voltage: number
  timezone: string
  tags: any[]
  code: string
  name: string
  installDate: string
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

export interface FwVer {
  requestDate: string
  version: string
}

export interface InstallationMetaData {
  reason: string
  payload: Payload
  lastCommandId: any
  CEP: any
  emailUser: any
  alias: any
  uC: any
  uc: any
}

export interface Payload {
  estabID: string
  estabAlias: string
  macAlias: string
  equipID: string
}

export interface Impediment {
  reasons: any[]
  isImpediment: boolean
}
