import { Container, Divider } from "@mui/joy";
import { useEffect, useState } from "react";
import { useParams, redirect } from "react-router-dom";
import { getAnalysis } from "../../api/getAnalysis";
import { ResponsiveBar } from "@nivo/bar";
import { analysisSchema } from "../../schema/analysis";

const Home = () => {
	const { modelName } = useParams<{ modelName: string }>();
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<{ [key: string]: string | number }[]>([]);
	const [keys, setKeys] = useState<string[]>([]);

	useEffect(() => {
		if (!modelName) {
			redirect("/");
			return;
		}
		const fetchData = async () => {
			const { data } = await getAnalysis(modelName);
			if (data === null) {
				redirect("/");
				return;
			} else {
				const entries = data[0].reduce((acc, entry, i) => {
					if (i === 0) {
						setKeys(entry.value as string[]);
						return acc;
					}
					const entr = analysisSchema.parse(entry);
					const value: { [key: string]: number } = {};
					Object.keys(entr.value).forEach((key) => {
						value[key] = Math.round(entr.value[key] * 100);
					});
					return [
						...acc,
						{
							origin: entry.origin,
							name: entry.name,
							insight_name: entry.insight_name,
							...value,
						},
					];
				}, [] as { [key: string]: string | number }[]);
				setData(entries);
			}
			setLoading(false);
		}
		setLoading(true);
		fetchData();
	}, [modelName]);
	return (
		<Container className="p-4 pt-0 box-border block max-h-full h-[calc(100vh-70px)]">
			<div className="flex flex-col gap-4 pt-4 text-white max-h-full box-border w-full h-full">
				<div className="flex flex-col gap-4 pt-4 text-zinc-300 max-h-full box-border h-full">
					<h1 className="text-4xl">{modelName}</h1>
					<Divider />
					<div className="border dark:border-zinc-700 border-zinc-200 rounded-md p-4 overflow-y-scroll h-full box-border">
						{
							loading ? (
								<div className="grow">Loading...</div>
							) : (
								<div className="h-[70vh] box-border max-h-[500px]">
									<ResponsiveBar
										data={data}
										indexBy={"origin"}
										keys={keys}
										margin={{ right: 30, bottom: 50, left: 60 }}

										layout="horizontal"
										groupMode="grouped"
										label={(d) => `${Math.round((d.value || 0))} %`}
										labelTextColor={"#fff"}
										colors={{ scheme: "dark2" }}
										axisBottom={{
											tickSize: 5,
											tickPadding: 5,
											tickRotation: 0,
											legend: "Percentage",
											legendPosition: "middle",
											legendOffset: 32,
										}}
										axisLeft={{
											tickSize: 5,
											tickPadding: 5,
											tickRotation: 0,
											legend: "Insight Name",
											legendPosition: "middle",
											legendOffset: -50,
										}}
										theme={{
											axis: {
												ticks: {
													text: {
														fill: "#a1a1aa",
														background: "#27272a",
													},
												},
												legend: {
													text: {
														fill: "#a1a1aa",
													},
												},
											},
											grid: {
												line: {
													stroke: "#a1a1aa",
												},
											},
											tooltip: {
												container: {
													background: "#27272a",
													borderRadius: "8px",
												},
											},
											labels: {
												text: {
													fill: "#a1a1aa",
													background: "#27272a",
													borderRadius: "8px",
												},
											},
										}}
										borderRadius={4}
										maxValue={100}
									/>
								</div>
							)
						}
					</div>
				</div>
			</div>
		</Container>
	);
}

export default Home;