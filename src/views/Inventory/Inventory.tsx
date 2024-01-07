import { getModels } from "../../api/getModels";
import { useEffect, useState } from "react";
import { ModelResponse } from "../../api/mockedData";
import { Link } from "react-router-dom";
import { Container, Divider } from "@mui/joy";

const Inventory = () => {
	const [models, setModels] = useState<ModelResponse[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchModels = async () => {
			const { data } = await getModels();
			setModels(data);
			setLoading(false);
		}
		setLoading(true);
		fetchModels();
	}, []);

	return (
		<Container>
			<div className="flex flex-col gap-4 pt-4 text-white">

				<div className="flex flex-col gap-4 pt-4 text-zinc-300">
					<h1 className="text-4xl">Inventory</h1>
					<Divider />
					<div className="grid grid-cols-1 gap-4">
						{loading ? (
							<div>Loading...</div>
						) : (
							models.map((model) => (
								<Link to={`/analysis/${model.model_name}`} key={model.model_name}>
									<div className="border dark:border-gray-700 border-gray-200 hover:border-sky-700 rounded-md p-4 hover:scale-[1.01] duration-200 bg-gradient-to-r from-sky-900 to-zinc-200 dark:to-black">
										<div className="flex items-center justify-between">
											<div className="font-bold text-lg text-white">{model.model_name}</div>
											<div className="font-normal text-sm dark:bg-zinc-900 bg-zinc-100 border dark:border-zinc-700 border-zinc-300 rounded-full p-1 px-3">{model.model_type}</div>
										</div>
									</div>
								</Link>
							))
						)}
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Inventory;
