import search from '../../assets/assets/icon-search.svg'

export const SearchBar = () => {
  return (
    <div className='flex gap-4 ml-3 '>
        <img src={search} className='w-6 h-6' />
        <input className='w-56 h-6 bg-transparent opacity-50' type="text" placeholder="Search for movies or TV series" />
</div>
  )
}
