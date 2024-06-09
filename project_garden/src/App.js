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
import { useDispatch, useSelector } from "react-redux"
import { fetchAllCategories } from "./store/slices/categoriesSlice"
import { fetchAllProducts } from "./store/slices/productsSlice"
import CartPage from "./pages/CartPage/CartPage"
import ProductsByCategoryPage from "./pages/ProductsByCategoryPage/ProductsByCategoryPage"
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
import ModalProductImg from "./components/ModalProductImg/ModalProductImg"
import ModalDayProduct from "./components/ModalDayProduct/ModalDayProduct"
import LikedProductsPage from "./pages/LikedProductsPage/LikedProductsPage"

function App() {

  const [modalActive, setModalActive] = useState(false)
  
  const [modalDayActive, setModalDayActive] = useState(false);

  const nightMode = useSelector(store => store.theme.nightMode);

	const dispatch = useDispatch();

	useEffect(() => {
    dispatch(fetchAllCategories())
    dispatch(fetchAllProducts())
  }, [dispatch]);

		
	return (
    <div className={["App", nightMode ? "night_mode" : ""].join(" ")}>
      <Context.Provider
        value={{
          modalActive,
          setModalActive,
          modalDayActive,
          setModalDayActive,
          nightMode
        }}
      >
        <ModalProductImg />
        <ModalDayProduct />
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/categories/all" element={<CategoriesPage />} />
          <Route path="/products/all" element={<AllProductsPage />} />
          <Route path="/sales/all" element={<AllSalesPage />} />
          <Route
            path="/category/:categoryId"
            element={<ProductsByCategoryPage />}
          />
          <Route path="/product/:productId" element={<SingleProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favorites_products" element={<LikedProductsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App

