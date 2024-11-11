import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent";
import { NotFoundBar } from "./NotFoundPage.styled";

export default function NotFoundPage() {
  return (
    <>
      <NavigationComponent />
      <NotFoundBar>Ooops... This page not found</NotFoundBar>
    </>
  );
}
 