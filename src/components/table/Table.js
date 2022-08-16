import React, {useState} from 'react'
import { Table } from 'antd'

const Tables = (props) => {
  const {columns, dataSource, isLoading} = props
  return (
    <>
      <div className='container'>
        <Table 
          columns={columns} 
          dataSource={dataSource} 
          pagination={false}
          // pagination={pagination}
          loading={isLoading}
        />
      </div>
    </>
  )
}
export default Tables
