import { RouterProvider, createHashRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import { Provider } from "react-redux";
import store from "./store";
import HomePage from "./pages/Home";
import "./styles/globals.scss";
import Create from "./pages/Create";
import NotFound from "./pages/NotFound";

const App = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "create/step/:stepId",
          element: <Create />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
