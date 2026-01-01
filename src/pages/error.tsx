import type { FC } from "hono/jsx";
import { Layout } from "../components/layout";
import { Navbar } from "../components/navbar";

export const ErrorPage: FC<{ error: string }> = ({ error }) => {
	return (
		<Layout>
			<Navbar />

			<h1>{error}</h1>
		</Layout>
	);
};
