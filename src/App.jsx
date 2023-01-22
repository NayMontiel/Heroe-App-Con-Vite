
import { AuthProvider } from "./auth/context/AuthProvider";
import { AppRoute } from "./routes/AppRouter";


function App() {
  

  return (
    <>
      <AuthProvider>
        <AppRoute />
      </AuthProvider>
    </>
  )
}

export default App
