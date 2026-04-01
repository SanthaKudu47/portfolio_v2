import NavbarDesktop from "./desktop/NavbarDesktop";
import NavBarMobile from "./mobile/NavbarMobile";
import NavbarMenu from "./mobile/popupMenu/NavbarMenu";

export default function AppNavBar() {
  return (
    <main>
      <div className="lg:hidden">
        <NavBarMobile />
        <NavbarMenu />
      </div>
      <div className="hidden lg:block">
        <NavbarDesktop />
      </div>
    </main>
  );
}
