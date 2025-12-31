import type { FC } from "hono/jsx";
import { Navbar } from "../components/navbar";
import { Layout } from "../layout";

export const IndexPage: FC = () => {
	return (
		<Layout>
			<Navbar />

			<h1>Alex's license plates database</h1>
			<p>
				Here you can find a database of all the license plates I've spotted over
				the past few years.
			</p>
		</Layout>
	);
};
