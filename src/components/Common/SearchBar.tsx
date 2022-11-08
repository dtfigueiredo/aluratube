import { VscSearch } from 'react-icons/vsc'
import { useRecoilState } from 'recoil'

import { SearchBarInputState } from '../../Atoms'

export default function SearchBar() {
  const [inputSearch, setInputSearch] = useRecoilState(SearchBarInputState)

  return (
    <div className='input-box'>
      <input
        type='text'
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <button onClick={() => console.log(inputSearch)}>
        <VscSearch size={20} />
      </button>
    </div>
  )
}
