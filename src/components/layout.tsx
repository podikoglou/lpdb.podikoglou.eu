import { Style } from "hono/css";
import type { FC } from "hono/jsx";

export const Layout: FC = (props) => {
	return (
		<html lang="en">
			<head>
				<link rel="stylesheet" href="/static/style.css" />
				<link rel="stylesheet" href="/static/recursive.css" />
				<Style />
			</head>
			<body>{props.children}</body>
		</html>
	);
};
