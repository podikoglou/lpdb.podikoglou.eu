import { css } from "hono/css";
import type { FC } from "hono/jsx";

export const Aside: FC<{ text: string }> = ({ text }) => {
	const asideClass = css`
    background-color: var(--flexoki-yellow-600);
    color: var(--color-background);
    margin-top: 30px;
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 20px;
    padding-right: 20px;
  `;

	return (
		<aside class={asideClass}>
			<p>{text}</p>
		</aside>
	);
};
