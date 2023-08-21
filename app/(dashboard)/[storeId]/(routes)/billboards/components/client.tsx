"use client"

import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'

import Heading from '@/components/ui/Heading'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { BillboardColumn, columns } from './columns'
import { DataTable } from '@/components/ui/data-table'
import { ApiList } from '@/components/ui/api-list'

interface BuildboardClientProps {
  data: BillboardColumn[]
}


const BuildboardClient:React.FC<BuildboardClientProps> = ({data}) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`  Buildboards (${data.length})`}
          description='Manage buildboards for your store'
        />
        <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
          <Plus className='mr-2 h-4 w-4' />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable
      columns={columns}
      data={data}
      searchKey='label'
      />
      <Heading 
      title='API'
      description='API calls for Billboards'
      />
      <ApiList entityName='billboards' entityIdName='billboardId' />
    </>
  )
}

export default BuildboardClient