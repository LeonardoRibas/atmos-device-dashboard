import React from 'react'
import { ping } from 'ldrs'
ping.register()

// Default values shown
type CardProps = {
  icon: React.ReactNode
  title: string
  value?: number
}

export default function RealTimeInfoCard({ icon, title, value }: CardProps) {
  return (
    <div className="card bg-white text-primary-content shadow-xl">
      <div className="card-body">
        <div className="mb-4">{icon}</div>
        <h2 className="card-title mb-2">{title}</h2>
        {value ? (
          <p className="text-2xl">{value}</p>
        ) : (
          <span className="loading loading-spinner loading-md bg-primary"></span>
        )}
      </div>
    </div>
  )
}
