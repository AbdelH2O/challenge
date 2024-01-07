import { Button, Container, Divider } from "@mui/joy";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<Container>
			<div className="flex flex-col gap-4 pt-4 text-white">

				<div className="flex flex-col gap-4 pt-4 text-zinc-300">
					<h1 className="text-4xl">Introduction</h1>
					<Divider />
					<div className="border dark:border-zinc-700 border-zinc-200 rounded-md p-4">
						<h1 className="text-2xl">Welcome to the Frontend Challenge!</h1>
						<p className="text-lg">This is a simple application that allows the user to view a "Models Inventory" with a list of all of their models, and view an Analysis data visualization of the models.</p>
						<p className="text-lg">Refer to the README.md file for more information. Best of luck!</p>
					</div>
				</div>
				<div>
					<Button
						component={Link}
						to="/inventory"
						variant="solid"
						size="lg"
						sx={{ textDecoration: "underline" }}
					>
						Go to Inventory Page
					</Button>
				</div>
			</div>
		</Container>
	);
};

export default Home;
