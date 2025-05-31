// export default App

import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import React from "react";

export default function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
}
