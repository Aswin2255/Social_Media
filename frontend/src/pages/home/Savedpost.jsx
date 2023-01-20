import React from 'react'
import Layout from '../../components/Topbar/Layout'
import Post from '../../components/Topbar/Post'

function Savedpost() {
  return (
    <div>
      <Layout>
        <h1 className='text-3xl mb-4 text-gray-400'>Saved posts</h1>
        <Post/>
        <Post/>
      </Layout>
    </div>
  )
}

export default Savedpost
