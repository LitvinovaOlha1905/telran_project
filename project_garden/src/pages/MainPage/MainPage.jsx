import React from "react"
import Banner from "../../components/Banner/Banner"
import CategorySection from "../../components/Categories/CategorySection";
import GetDiscount from "../../components/GetDiscount/GetDiscount"
import SalesContainer from "../../components/SalesContainer/SalesContainer";

export default function MainPage() {
	return (
		<div>
			<Banner />
			<CategorySection/>
			<GetDiscount />
			<SalesContainer />
		</div>
	)
}
