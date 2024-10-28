import React from 'react'
import service from '../appwrite/conf'
import { Link } from 'react-router-dom'

function Postcard({ $id, Title, FeaturedImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-900 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          <img src={service.getFilePreview(FeaturedImage)} alt={Title} className='rounded-xl' />
        </div>
        <h2 className='text-sm font-serif sm:text-xl font-bold'> {Title} </h2>
      </div>
    </Link>
  )
}

export default Postcard