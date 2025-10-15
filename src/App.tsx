import { RouterProvider } from "react-router-dom";
import { ProviderRouter } from "./router/index";

function App() {
  return (
    <>
      <RouterProvider router={ProviderRouter} />
    </>
  );
}

export default App;
