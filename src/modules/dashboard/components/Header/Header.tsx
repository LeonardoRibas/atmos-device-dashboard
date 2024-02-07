type HeaderProps = {
  name?: string
  comment?: string
  meter?: string
  isConnected?: boolean
}

export default function Header({
  name,
  comment,
  meter,
  isConnected,
}: HeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between">
      <div className="flex flex-col md:flex-row">
        <img
          src="https://media.licdn.com/dms/image/D4D0BAQFZe6BDWSNkcA/company-logo_200_200/0/1681516686873/atmosenergy_logo?e=1715212800&v=beta&t=bvNnUwigkA09FZDqdZ8zrPs7vI2ZgFSKt-fOrd7iamQ"
          className="w-20 h-20 rounded-full md:self-center mb-6 mr-4"
        />
        <div className="flex-col">
          <h1 className="text-3xl font-bold mb-2">{name}</h1>
          <h2 className="text-lg font-medium text-gray-700 mb-6">{`${comment} - ${meter}`}</h2>
        </div>
      </div>
      {isConnected ? (
        <div className="flex items-center gap-2">
          <p>Conectado</p>
          <l-ping size="45" color="#5DD629"></l-ping>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <p>Desconectado</p>
          <l-ping size="45" color="red"></l-ping>
        </div>
      )}
    </div>
  )
}
