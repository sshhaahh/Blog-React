import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
const Blogs = () => {
  const{loading,posts,page}=useContext(AppContext)
  // console.log(posts.length)
  return (
    <div className='flex flex-col justify-center items-center w-[40%] gap-y-6'>
      
        {loading?(<Spinner/>):(
          posts.length===0?("No Post"):(
            posts?.map((post,index)=>(

            <div key={index} >
              <p className='font-bold text-lg mb-1'>{post.title}</p>
              <p className='text-sm text-black opacity-80'>By <span className='italic' >{post.author}</span> on <span className='font-semibold underline-offset-2 underline decoration-dashed'>{post.category}</span></p>
              <p className='text-sm text-black opacity-80 mb-2'>Posted On <span>{post.date}</span></p>
              <p className='font-semibold text-black opacity-80 text-sm mb-2'>{post.content}</p>
              <div className='text-sm text-[#0000FF]'>
                {post.tags.map((tag,index)=>(
                  <span key={index}>#{tag} </span>
                ))}
              </div>
            </div>

            ))
          )
        )}

    </div>
    
  )
}

export default Blogs