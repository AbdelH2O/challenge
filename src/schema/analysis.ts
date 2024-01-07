import { z } from "zod";

// {
// 	origin: "sd_cm",
// 	value: {
// 		PetalWidthCm: 0.35805864148438127,
// 		SepalWidthCm: 0.06840044886502064,
// 		PetalLengthCm: 0.36509329889013475,
// 		SepalLengthCm: 0.20844761076046325,
// 	},
// 	insight_name: "variable_ranking",
// 	name: "sd_cm_variable_ranking",
// },

export const analysisSchema = z.object({
	origin: z.string(),
	value: z.record(z.number()),
	insight_name: z.string(),
	name: z.string(),
});

export type AnalysisData = z.infer<typeof analysisSchema>;
