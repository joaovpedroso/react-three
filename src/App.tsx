import { Header } from './components/Header'
import { Main } from 'src/components/Main'
import { PageHeader } from 'src/components/PageHeader/PageHeader'
import { SearchInput } from 'src/components/SearchInput'
import { Sidebar } from 'src/components/Sidebar'
import { ThreeList } from 'src/components/ThreeList'
import { THREE_ITEMS } from 'src/mock'
import { getThreeArray } from 'src/utils'

function App() {
  return (
    <>
      <Header />
      <Main>
        <PageHeader />
        <SearchInput />
        <Sidebar>
          <ThreeList itens={getThreeArray(THREE_ITEMS)} />
        </Sidebar>
      </Main>
    </>
  )
}

export default App
