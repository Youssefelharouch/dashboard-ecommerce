"use client"

import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'

import Heading from '@/components/ui/Heading'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useEffect } from 'react'

function BuildboardClient() {
  const router = useRouter ();
  const params = useParams();

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title="Buildboards (0)"
          description='Manage buildboards for your store'
        />
        <Button onClick={()=>router.push(`/${params.storeId}/billboards/new`)}>
          <Plus className='mr-2 h-4 w-4' />
          Add New
        </Button>
      </div>
      <Separator />
    </>

  )
}

export default BuildboardClient