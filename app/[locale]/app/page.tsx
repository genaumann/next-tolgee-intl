import ClientPage from '@/components/client'
import ServerPage from '@/components/server'

export default async function Page() {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
        <div className="border p-4 rounded-lg shadow-md">
          <ServerPage />
        </div>
        <div className="border p-4 rounded-lg shadow-md">
          <ClientPage />
        </div>
      </div>
    </div>
  )
}
