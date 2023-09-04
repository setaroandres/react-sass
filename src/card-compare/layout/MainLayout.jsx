import { Grid } from "@mui/material"

export const MainLayout = ({children}) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        xs={12}
        md={8}
      >
        {children}
      </Grid>
    </Grid>
  )
}
