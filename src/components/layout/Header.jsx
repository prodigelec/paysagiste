import TopBar from "./TopBar";
import MainNav from "./MainNav";

export default function Header() {
  return <MainNav topBar={<TopBar />} />;
}
