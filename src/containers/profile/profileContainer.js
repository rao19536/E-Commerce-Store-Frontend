import React from 'react'
import Profile from '../../components/profile/profile'
import { useSingleUserQuery } from '../../services/endPoints/users/profile'
import { useUpdateProfileMutation } from '../../services/endPoints/users/profile'
import CircularProgress from '@mui/material/CircularProgress'

const ProfileContainer = () => {
    const {isLoading, isError, data, error } = useSingleUserQuery()
    const [updateProfile, response] = useUpdateProfileMutation()
    const onSubmit = async (updateInfo) => {
        await updateProfile(updateInfo)
        .then((resp)=>{
            console.log('resp=>', resp)
        }).catch((err)=>{
            console.error('err', err)
        })
    }
    
  return (
    <>
        {!isLoading ? !data && isError ? (
            <h3 className='text-center pt-5'>{error.error}</h3>
        ) : (
        <Profile updateInfo={onSubmit}
            name={data.name}
            city={data.city}
            country={data.country}
            education={data.education}
            contact={data.contact}
            email={data.email}
            myskills={data.skills}
            response = {response}
        />
        ) : (
            <CircularProgress className='spinner-class' />
        )}
    </>
  )
}

export default ProfileContainer