import HeaderUi from "../../Header/HeaderUi";
import ImageGrid2000 from "../ImageGrid/ImageGrid2000.tsx";
import ImageGrid2010 from "../ImageGrid/ImageGrid2010.tsx";
import ImageGrid60 from "../ImageGrid/ImageGrid60";
import ImageGrid70 from "../ImageGrid/ImageGrid70";
import ImageGrid80 from "../ImageGrid/ImageGrid80.tsx";
import ImageGrid90 from "../ImageGrid/ImageGrid90.tsx";

export const DecadasUi = () => {
  return (
    <>
    <HeaderUi/>
    <h1>Decada de los 60</h1>
    <ImageGrid60/> 
    <h1>Decada de los 70</h1>
    <ImageGrid70/>
    <h1>Decada de los 80</h1>
    <ImageGrid80/>
    <h1>Decada de los 90</h1>
    <ImageGrid90/>
    <h1>Decada de los 2000</h1>
    <ImageGrid2000/>
    <h1>Decada de los 2010</h1>
    <ImageGrid2010/>
    </>
  )
}
