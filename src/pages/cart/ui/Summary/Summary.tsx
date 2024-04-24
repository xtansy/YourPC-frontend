import css from "./Summary.module.css";

import { Button } from "shared/ui";

interface SummaryProps {
	totalPrice: number;
}

export const Summary: React.FC<SummaryProps> = ({ totalPrice }) => {
	return (
		<div className={css.summary}>
			<div className={css.content}>
				<div className={css.text}>Итого</div>
				<div className={css.price}>₽ {totalPrice}</div>
			</div>
			<Button variant="blackWhite" className={css.summaryButton}>
				Перейти к оформлению
			</Button>
		</div>
	);
};
