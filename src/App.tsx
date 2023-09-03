import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard, { tasksLoader } from "./pages/Dashboard";
import Create, { createAction } from "./pages/Create";
import Profile from "./pages/Profile";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} loader={tasksLoader} />
      <Route path="create" element={<Create />} action={createAction} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
