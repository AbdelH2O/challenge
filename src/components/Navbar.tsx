import { Divider, Typography } from "@mui/joy";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="p-4 border-b border-zinc-200 dark:border-zinc-700 flex gap-4 justify-between sm:justify-start">
			<Typography level="title-lg" color={"primary"}>FE Challenge</Typography>
			<div className="hidden sm:flex gap-4">
				<Divider orientation="vertical" />
				<Link to="/">Home</Link>
				<Link to="/inventory">Inventory</Link>
				{/* sidebar icon */}
			</div>
			<button className="flex items-center justify-center sm:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 text-zinc-300 dark:text-zinc-400"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6h16M4 12h16M4 18h16M4 6h16"
					/>
				</svg>
			</button>
		</nav>
	);
};

export default Navbar;
