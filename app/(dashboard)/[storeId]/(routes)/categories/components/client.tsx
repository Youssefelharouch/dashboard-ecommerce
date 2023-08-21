"use client"

import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'

import Heading from '@/components/ui/Heading'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CategoryColumn, columns } from './columns'
import { DataTable } from '@/components/ui/data-table'
import { ApiList } from '@/components/ui/api-list'

interface CategoryProps {
  data: CategoryColumn[]
}


const CategoryClient:React.FC<CategoryProps> = ({data}) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`  Categories (${data.length})`}
          description='Manage Categories for your store'
        />
        <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
          <Plus className='mr-2 h-4 w-4' />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable
      columns={columns}
      data={data}
      searchKey='name'
      />
      <Heading 
      title='API'
      description='API calls for Categories'
      />
      <ApiList entityName='categories' entityIdName='categorydId' />
    </>
  )
}

export default CategoryClient