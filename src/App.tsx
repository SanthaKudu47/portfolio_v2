import { useInitTheme } from "@hooks/theme";
import AppNavBar from "@components/navbar/Navbar";
import Dock from "@components/dock/dock";

function App() {
  //call theme init
  useInitTheme();
  return (
    <>
      <AppNavBar />
      <div className="bg-app-white-300 absolute inset-0 -z-10"></div>
      <Dock />
    </>
  );
}

export default App;
