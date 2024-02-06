import { useEffect, useState } from 'react'

export default function useFetchDeviceInfo(
  fetchUrl: string,
  accessToken: string
) {
  const [data, setData] = useState<IInstallationMeter>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    fetch(fetchUrl, {
      headers: {
        'x-access-token': accessToken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.installationMeter)
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [fetchUrl, accessToken])
  return { data, loading, error }
}
