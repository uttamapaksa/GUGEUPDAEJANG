import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import router from './Router.tsx'

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
export const client = new QueryClient();

root.render(
  // <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </RecoilRoot>
  // </React.StrictMode>
)
