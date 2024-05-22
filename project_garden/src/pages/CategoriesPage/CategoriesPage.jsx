import React, { useEffect } from "react";
import CategoriesContainer from "../../components/Categories/CategoriesContainer";
import Sceleton from "../../components/Sceleton/Skeleton";

export default function CategoriesPage() {
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

  return <div>{isLoading ? <Sceleton /> : <CategoriesContainer />}</div>;
}
