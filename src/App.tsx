import NavbarMenu from "@components/navbar/mobile/popupMenu/NavbarMenu";
import NavBarMobile from "@components/navbar/mobile/NavbarMobile";
import { useInitTheme } from "@hooks/theme";

function App() {
  //call theme init
  useInitTheme()
  return (
    <main>
      {/* <Navbar /> */}
      {/* <NavbarDesktop/> */}
      <NavBarMobile />
      <NavbarMenu />
    </main>
  );
}

export default App;
