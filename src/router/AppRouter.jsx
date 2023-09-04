import { Route, Routes } from "react-router-dom";
import { PharmacyListPage, SearchPage } from "../card-compare/pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<PharmacyListPage />} />
      <Route path="/search/:id" element={<SearchPage />} />
    </Routes>
  )
}
