export default function Errors() {

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Error Explorer
      </h1>

      <div className="space-y-4">

        <div className="border p-4 rounded">
          ECONNREFUSED 127.0.0.1
        </div>

        <div className="border p-4 rounded">
          Redis connection failed
        </div>

      </div>

    </div>
  )
}