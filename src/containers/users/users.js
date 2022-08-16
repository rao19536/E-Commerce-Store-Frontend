import React from 'react'
import { useAllUsersQuery } from '../../services/endPoints/users/profile'
import { Table } from 'antd'
import './style.scss'

const Users = () => {
    const {data, isLoading, isError} = useAllUsersQuery()
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Education',
            dataIndex: 'education',
            key: 'education',
        },
        {
            title: 'Contact',
            dataIndex: 'contact',
            key: 'contact',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
    ]
    const users = data && data.map((value, index) => {
        return {
            key: index,
            name: value.name,
            education: value.education,
            contact: value.contact,
            email: value.email,
            country: value.country,
            city: value.city
        }
    })

  return (
    <div className='users'>
        <Table 
            dataSource={users && users} 
            columns={columns} 
            loading={isLoading}
        />
    </div>
  )
}

export default Users