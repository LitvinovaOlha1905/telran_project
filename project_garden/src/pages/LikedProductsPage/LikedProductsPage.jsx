import React, { useContext, useEffect } from "react";
import styles from "./LikedProductsPage.module.css";
import Sceleton from "../../components/Sceleton/Skeleton";
import FavoritesProductsContainer from "../../components/FavoritesProductContainer/FavoritesProductContainer";
import { Context } from "../../context";

export default function LikedProductsPage() {

	  const { nightMode } = useContext(Context);

   useEffect(() => {
			window.scrollTo(0, 0);
		}, []);
		const [isLoading, setIsLoading] = React.useState(true);

		React.useEffect(() => {
			setIsLoading(true);

			setTimeout(() => {
				setIsLoading(false);
			}, 2000);
		}, []);
	return (
    <div className={styles.wrapper}>
      <div className="container">
        <h1 className={`${styles.title} ${nightMode ? styles.night_mode : ""}`}>
          Liked products
        </h1>

        {isLoading ? <Sceleton /> : <FavoritesProductsContainer />}
      </div>
    </div>
  );
}
