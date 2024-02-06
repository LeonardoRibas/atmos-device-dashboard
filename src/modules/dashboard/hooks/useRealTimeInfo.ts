import { useEffect, useState } from 'react'
import mqtt from 'mqtt' // import namespace "mqtt"\

export default function useRealTimeInfo(brokerUrl: string, topicName: string) {
  const [message, setMessage] = useState<ITelemetry>()
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const client = mqtt.connect(brokerUrl) // create a client
    client.on('connect', () => {
      client.subscribe(topicName, (err) => {
        if (!err) {
          console.log('connection successful')
          setIsConnected(true)
        }
      })
    })
    client.on('message', (_, message) => {
      // message is Bx'uffer
      setMessage(JSON.parse(message.toString()))
    })

    return () => {
      client.end()
    }
  }, [brokerUrl, topicName])

  return { message, isConnected }
}
