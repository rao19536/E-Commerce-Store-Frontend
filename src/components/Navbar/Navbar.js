import React from 'react'
import { Outlet } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { Menu } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'
import './style.scss'
const { SubMenu } = Menu;

const Navbar = () => {
    const navigate = useNavigate()
    const handleClick = (value) => {
        if(value.key === 'logout'){
            localStorage.clear()
            navigate('/login')
        }else{
            navigate(value.key)
        }
    };

  return (
    <>
    <div className='navbar-container'>
        <div className='container'>
            <Menu mode="horizontal" theme="dark" onClick={(e) => handleClick(e)}>
                <Menu.Item>
                    <img src='./logo.png' alt="nill" width="50"/>
                </Menu.Item>
                <Menu.Item key="/">
                    Home
                </Menu.Item>
                <Menu.Item key="/about">
                    About
                </Menu.Item>
                <Menu.Item key="/contact">
                    Contact Us
                </Menu.Item>
                <SubMenu
                    style={{position:'absolute', right:'6%'}}
                    title={
                        <span className="submenu-title-wrapper">
                            Menu <CaretDownOutlined style={{fontSize:'20px'}}/>
                        </span>
                    }
                    >
                    <Menu.ItemGroup title="">
                        <Menu.Item key="/profile">Profile</Menu.Item>
                        <Menu.Item key="/users">Users</Menu.Item>
                        <Menu.Item key="logout">Log Out</Menu.Item>
                    </Menu.ItemGroup>
                    
                </SubMenu>
            </Menu>
        </div>
    </div>
    <Outlet />
    </>
  )
}

export default Navbar