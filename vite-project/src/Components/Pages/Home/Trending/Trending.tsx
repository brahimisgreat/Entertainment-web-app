import data from '../../../../data.json'
import { VideoBlock } from './VideoBlock'

export const Trending = () => {
    console.log(data)
  return (
    <div className='text-white gap-4 flex flex-col'>
        <h3 className='text-xl'>Trending</h3>

        <VideoBlock />

    </div>
  )
}
