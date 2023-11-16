import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import router from './Router.tsx'
import theme from './styles/index.ts'
import GlobalStyle from './styles/Globalstyle.tsx'

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
export const client = new QueryClient();

root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </RecoilRoot>
  </ThemeProvider>
  // </React.StrictMode>
)
