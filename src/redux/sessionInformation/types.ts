export type SessionInformationId = string

export type Host = {
  name: string
  about: string
}

export type SessionInformation = {
  id: number
  title: string
  repeats: string
  host: Host
  description: string
}
