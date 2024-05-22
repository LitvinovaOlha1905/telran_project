import { Route, Routes, useParams } from "react-router-dom"
import "./App.css"
import MainPage from "./pages/MainPage/MainPage"
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage"
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage"
import AllSalesPage from "./pages/AllSalesPage/AllSalesPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import { useEffect, useState } from "react"
import { Context } from "./context"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { useDispatch } from "react-redux"
import { fetchAllCategories } from "./store/slices/categoriesSlice"
import { fetchAllProducts } from "./store/slices/productsSlice"
import CartPage from "./pages/CartPage/CartPage"
import ProductsByCategoryPage from "./pages/ProductsByCategoryPage/ProductsByCategoryPage"
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
import { fetchSingleProducts } from "./store/slices/singleProductSlice"

function App() {
	const [modalActive, setModalActiv] = useState()

	const dispatch = useDispatch();

	useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

	useEffect(() => {
		dispatch(fetchAllProducts())
	}, [])
	
	return (
    <div className="App">
      <Context.Provider value={{ modalActive, setModalActiv }}>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/categories/all" element={<CategoriesPage />} />
          <Route path="/products/all" element={<AllProductsPage />} />
          <Route path="/sales/all" element={<AllSalesPage />} />
          <Route path="/category/:categoryId" element={<ProductsByCategoryPage />} />
		      <Route path="/product/:productId" element={<SingleProductPage/>} />
          <Route path='/cart' element={<CartPage/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App
