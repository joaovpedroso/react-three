import { useEffect, useMemo, useState } from 'react'
import { Header } from './components/Header'
import { Main } from 'src/components/Main'
import { PageHeader } from 'src/components/PageHeader/PageHeader'
import { SearchInput } from 'src/components/SearchInput'
import { Sidebar } from 'src/components/Sidebar'
import { ThreeList } from 'src/components/ThreeList'
import { THREE_ITEMS } from 'src/mock'
import { filterThreeItens, getThreeArray } from 'src/utils'
import {useDebounce} from './hooks'
import { IThreeItem } from './components/ThreeList/ThreeList.types'

function App() {

  const initialThreeItems: IThreeItem[] = useMemo(() => getThreeArray(THREE_ITEMS), [THREE_ITEMS]);
  const [filteredThreeItems, setFilteredThreeItems] = useState<IThreeItem[]>(initialThreeItems);

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedTerm = useDebounce(searchTerm, 500);

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  };

  useEffect(() => {
      if( !debouncedTerm || debouncedTerm.length === 0 ) {
        setFilteredThreeItems(initialThreeItems)
        return
      }

      const filteredItems = filterThreeItens(initialThreeItems, debouncedTerm)
      setFilteredThreeItems(filteredItems)
  }, [debouncedTerm])

  return (
    <>
      <Header />
      <Main>
        <PageHeader />
        <SearchInput onChange={handleChangeSearch} value={searchTerm} />
        <Sidebar>
          <ThreeList itens={filteredThreeItems} />
        </Sidebar>
      </Main>
    </>
  )
}

export default App
