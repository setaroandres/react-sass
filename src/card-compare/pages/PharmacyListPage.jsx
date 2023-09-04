import { Grid, Typography } from "@mui/material";
import { NavBar, PharmaciesList, SearchBox } from "../components";
import { MainLayout } from "../layout/MainLayout";

//HACER UN THEME PARA DEFINIR FONT SIZES, COLORES, ETC

export const PharmacyListPage = () => {
  return (
    <MainLayout>
      <NavBar/>

      <Grid component='div'>
        <Typography 
          variant="h1"
          >
          Choose your pharmacy
        </Typography>
        <Typography 
          variant="subtitle1"
          mt={2}
        >
          Select your pharmacy from the list and start lower prices for your patients
        </Typography>
      </Grid>

      <Grid 
        display='flex'
        justifyContent='center'
      >
       <SearchBox />
      </Grid>

      <Grid component='div'>
        <PharmaciesList />
      </Grid>
    </MainLayout>
  )
}
