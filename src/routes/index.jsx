import HomePage from "@/features/home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";


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