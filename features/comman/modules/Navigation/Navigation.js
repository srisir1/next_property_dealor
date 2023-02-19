
import NavigationDesktop from "./component/NavigationDesktop";
import NavigationMobile from "./component/NavigationMobile";
import { NavigationLink } from "./NavigationConsts";
const Navigation = () => {
  return (
    <>
      <NavigationDesktop />
      <NavigationMobile />
    </>
  )
}

export default Navigation;