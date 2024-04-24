import css from "./header.module.css";

import { type ReactNode } from "react";

import { Logo } from "shared/ui";

interface HeaderProps {
	rightSlot: ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ rightSlot }) => {
	return (
		<div className={css.header}>
			<Logo />
			<div className={css.right}>
				{rightSlot}
				{/* theme switcher */}
			</div>
		</div>
	);
};
