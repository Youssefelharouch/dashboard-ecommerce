"use client"

import { useParams } from "next/navigation"

import { useOrigin } from "@/hooks/use-origin"
import { ApiAlert } from "./api-alert"

interface ApiListProps {
  entityName: string
  entiyIdName: string
}

const ApiList: React.FC<ApiListProps> = ({
  entityName,
  entiyIdName
}) => {

  const params = useParams();
  const origin = useOrigin();
  const baseUrl = `${origin}/api/${params.storeId}`
  return (
    <>
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}/{${entiyIdName}}`}
      />
      <ApiAlert
        title="POST"
        variant="admin"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entiyIdName}`}
      />
      <ApiAlert
        title="DELETE"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entiyIdName}`}
      />
    
    </>
  )
}

export default ApiList