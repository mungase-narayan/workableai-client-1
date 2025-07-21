import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "@/features/home-page";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route>
        <Route index element={<HomePage />} />
      </Route>
    </Route>
  )
)

export default router