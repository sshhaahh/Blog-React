import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const{loading,page,handlePage,totalPages}=useContext(AppContext);
  handlePage(page);
  console.log(page+1)

  return (
    <div className='flex flex-row items-center justify-center gap-10 py-2 border-t-2 font-semibold '>
          <div className='w-[6%]'>
            { page>1 &&
              <button onClick={()=>handlePage(page-1)} disabled={loading} className='border py-1 px-3 bg-gray-100 hover:bg-gray-200 rounded-lg'>Previous</button>
            }
          </div>
            <p className='w-[6%] ' >Page {page} of {totalPages}</p>
          <div className='w-[6%]'>
            { page<totalPages &&
              <button onClick={()=>handlePage(page+1)} disabled={loading} className='border py-1 px-3  bg-gray-100 hover:bg-gray-200 rounded-lg'>Next</button>     
            }
          </div>

    </div>
  )
}

export default Pagination