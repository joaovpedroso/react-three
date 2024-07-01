import { Suspense, useEffect, useMemo, useState } from 'react'
import { Header } from './components/Header'
import { Main } from 'src/components/Main'
import { PageHeader } from 'src/components/PageHeader/PageHeader'
import { SearchInput } from 'src/components/SearchInput'
import { Sidebar } from 'src/components/Sidebar'
import { ThreeList } from 'src/components/ThreeList'
import { filterBySearchTerm, filterBySituation, getThreeArray } from 'src/utils'
import { useDebounce, useLocations, useAssets} from './hooks'
import { IThreeItem } from './components/ThreeList/ThreeList.types'
import { ILocation } from './services/locations/types'
import { IAssets } from './services/assets/types'
import { ICompany } from './services/companies/types'
import { INavItem } from './components/NavItem/NavItem.types'

function App() {
  const [selectedCompany, setSelectedCompany] = useState<INavItem | null>(null  );

  const { locations, refetchLocations } = useLocations({companyId: selectedCompany?.id ?? ''});
  const { assets, refetchAssets } = useAssets({companyId: selectedCompany?.id ?? ''});

  const threeItemsList: IThreeItem[] = useMemo(() => {
    if( (!locations || locations.length < 1) && (!assets || assets?.length < 1) )
      return [];

    const locationsList = locations?.length ? locations : [];
    const assetList = assets?.length ? assets : [];

    return getThreeArray(locationsList as ILocation[], assetList as IAssets[]);
  }, [assets, locations]);

  const [filteredThreeItems, setFilteredThreeItems] = useState<IThreeItem[]>(() => threeItemsList);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedTerm = useDebounce(searchTerm, 500);

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  };

  const handleFindLocations = (company: ICompany) => {
    setSelectedCompany(company as INavItem);
  }

  const handleFindBySituation = () => {
    const filteredItems = filterBySituation(threeItemsList, 'sensorType', 'energy');

    setFilteredThreeItems(filteredItems);
  };

  useEffect(() => {
      if( !debouncedTerm || debouncedTerm.length === 0 ) {
        setFilteredThreeItems(threeItemsList)
        return
      }

      const filteredItems = filterBySearchTerm(threeItemsList, debouncedTerm)
      setFilteredThreeItems(filteredItems)
  }, [debouncedTerm])

  useEffect(() => {
    setFilteredThreeItems(threeItemsList)
  }, [threeItemsList])

  useEffect(() => {
    if(selectedCompany?.id) {
      refetchLocations();
      refetchAssets();
    }
  }, [selectedCompany?.id])

  return (
    <>
      <Header onSelectCompany={handleFindLocations} />
      <Main>
        <PageHeader selectedCompany={selectedCompany} />
        <SearchInput onChange={handleChangeSearch} value={searchTerm} />

      <button onClick={() => handleFindBySituation()}>Filta pelos energy</button>

        <Sidebar>

        <Suspense fallback={<p>Carreganuuuuuu......</p>}>

          {
            filteredThreeItems.length > 0 && (
              <ThreeList itens={filteredThreeItems} />
            )
          }

          {filteredThreeItems.length < 1 && (
            <p>Nenhum resultado encontrado. Selecione uma empresa ou altere o termo de pesquisa para visualizar os itens.</p>
          )}
        </Suspense>
        </Sidebar>
      </Main>
    </>
  )
}

export default App
