import "./App.css";
import Body from "./Components/Body";
import Head from "./Components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import Watchpage from "./Components/Watchpage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    Children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <Watchpage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="ml-2 bg-white">
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
