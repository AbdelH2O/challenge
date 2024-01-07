import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="flex flex-col gap-2 dark:bg-zinc-900 dark:text-zinc-400 bg-white text-black h-screen">
			<Navbar />
			<Outlet />
		</div>
	);
}

export default App;
