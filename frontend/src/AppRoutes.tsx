import {Routes,Route} from 'react-router-dom'
import Layout from './layouts/Layout'
const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout>Home Page</Layout>} />
        <Route path='/user-profile' element={<h1>Profile Page</h1>} />
    </Routes>
  )
}

export default AppRoutes