import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ModalProvider from "@context/ModalProvider";
import RootLayout from "@pages/RootLayout";
import HomePage from "@pages/HomePage";
import { ThemeProvider } from "@emotion/react";
import theme from "./config/muiconfigs";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  </ThemeProvider>
);
