import BuildboardClient from "./components/client"

const BillboardsPage = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BuildboardClient />
      </div>
    </div>
  )
}

export default BillboardsPage