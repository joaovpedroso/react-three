import { Header } from './components/Header'
import { Main } from 'src/components/Main'
import { PageHeader } from 'src/components/PageHeader/PageHeader'
import { SearchInput } from 'src/components/SearchInput'
import { Sidebar } from 'src/components/Sidebar'
import { ThreeList } from 'src/components/ThreeList'

function App() {
  return (
    <>
      <Header />
      <Main>
        <PageHeader />
        <SearchInput />
        <Sidebar>

          <ThreeList itens={[
              {
                "id": "656a07b3f2d4a1001e2144bf",
                "name": "CHARCOAL STORAGE SECTOR",
                "parentId": "65674204664c41001e91ecb4"
              },
              {
                "id": "656733611f4664001f295dd0",
                "name": "Empty Machine house",
                "parentId": null
              },
              {
                "id": "656733611f4664001f295dd0",
                "name": "PRIMEIRO DO CHARCOAL",
                "parentId": "656a07b3f2d4a1001e2144bf"
              },
              {
                "id": "656733611f4664001f295dd1",
                "name": "SEGUNDO DO CHARCOAL",
                "parentId": "656a07b3f2d4a1001e2144bf"
              },
              {
                "id": "656733611f4664001f295dd2",
                "name": "PENULTIMO DO CHARCOAL",
                "parentId": "656a07b3f2d4a1001e2144bf"
              },
              {
                "id": "656733611f4664001f295dd3",
                "name": "ULTIMO DO CHARCOAL",
                "parentId": "656a07b3f2d4a1001e2144bf"
              },
              {
                "id": "656733b1664c41001e91d9ed",
                "name": "Machinery house",
                "parentId": null
              },
              {
                "id": "65674204664c41001e91ecb4",
                "name": "PRODUCTION AREA - RAW MATERIAL",
                "parentId": null
              }
          ]} />

        </Sidebar>
        <h1>Olar</h1>
      </Main>
    </>
  )
}

export default App
