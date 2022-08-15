import React from 'react'
import { Space, Table, Tag } from 'antd'

const Tables = ({data, columns}) => {
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  )
}
export default Tables
