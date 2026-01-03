import type { FC } from "hono/jsx";
import { EntriesTable } from "../components/entries-table";
import { Layout } from "../components/layout";
import { Navbar } from "../components/navbar";

export const IndexPage: FC = () => {
	return (
		<Layout>
			<Navbar />

			<h1>Alex's License Plates Database</h1>

			<p>
				Here you can find a database of some cool license plates I've spotted
				over the past few years (mostly in Greece, perhaps some in neighbouring
				countries).
			</p>

			<p>A few notes:</p>
			<ol>
				<li>
					I usually write them down on my notes app in a rush and add them here
					later. There may be typos.
				</li>

				<li>
					The dates for the first 350 or so entries are <em>approximated</em>,
					as I'd been collecting them for a few months before I started
					inserting them into a database wih dates.
				</li>
			</ol>

			<h2>Recent Entries</h2>

			<EntriesTable />
		</Layout>
	);
};
