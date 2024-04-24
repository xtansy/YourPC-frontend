import { useAppDispatch } from "shared/model";
import { Icon } from "shared/ui";

import { type CartItem, removeItem } from "entities/cart";

interface RemoveFromCartIconProps {
	id: CartItem["_id"];
}

export const RemoveFromCartIcon: React.FC<RemoveFromCartIconProps> = ({
	id,
}) => {
	const dispatch = useAppDispatch();

	const onClickAdd = () => {
		dispatch(removeItem(id));
	};

	return <Icon onClick={onClickAdd} type="trash" />;
};
