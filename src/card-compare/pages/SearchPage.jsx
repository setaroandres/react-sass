import { Grid } from '@mui/material'
import { NavBar, SearchForMedication } from '../components'
import { MainLayout } from '../layout/MainLayout'

export const SearchPage = () => {
  return (
    <MainLayout>
      <NavBar />
      
      <Grid component='div'>
        <SearchForMedication />
      </Grid>
    </MainLayout>
  )
}
