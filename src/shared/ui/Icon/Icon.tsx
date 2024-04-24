import css from "./Icon.module.css";

export type IconType = "like" | "cart" | "star" | "trash" | "fill-like";

interface IconProps {
	type: IconType;
	onClick?: () => void;
}

export const Icon: React.FC<IconProps> = ({ type, onClick }) => {
	return (
		<div
			onClick={onClick}
			style={{ backgroundImage: `url("/svg/${type}.svg")` }}
			className={css.icon}
		></div>
	);
};
