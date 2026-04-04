import { useInitTheme } from "@hooks/theme";
import AppNavBar from "@components/navbar/Navbar";
import Tooltip from "@components/tooltip/tooltip";
import DockCmp from "@components/dock";

function App() {
  //call theme init
  useInitTheme();
  return (
    <>
      <Tooltip />
      <AppNavBar />
      <div className="bg-app-white-300 absolute inset-0 -z-10"></div>
      <DockCmp />
    </>
  );
}

export default App;
