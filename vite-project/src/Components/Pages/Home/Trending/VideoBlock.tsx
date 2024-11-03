import React from 'react'
import movieIcon from '../../../../assets/assets/icon-category-movie.svg'
import bookmarkIcon from '../../../../assets/assets/icon-bookmark-empty.svg'


export const VideoBlock = () => {
  return (
    <div className='h-36 w-60 border border-white flex flex-col rounded-lg justify-around'>
    <div className='w-full  flex justify-end  '>
            <img src={bookmarkIcon} alt="" className='mr-2 mb-1 h-10 p-2 bg-gray-600  rounded-full' />
    </div>
    <div className='  ml-3'>
        <div className='flex opacity-75 items-center gap-2'>
            <span>2019</span>
            <span className='w-1 h-1 rounded full bg-white'></span>
            <span><img src={movieIcon}/></span>
            <span>Movie</span>
            <span className='w-1 h-1 rounded full bg-white'></span>
            <span>PG</span>
        </div>
        <h3 className=''>{'Beyond earth'}</h3>
    </div>

</div>

  )
}
