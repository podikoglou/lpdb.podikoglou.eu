import type { FC } from "hono/jsx";

export const Navbar: FC = () => {
	return (
		<nav>
			<div>
				<li>
					<a href="/">LPDB</a>
				</li>
			</div>

			<div>
				<li>
					<a href="/submit">submit</a>
				</li>
			</div>
		</nav>
	);
};
