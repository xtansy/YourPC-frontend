import { type CartItem } from "entities/cart";
import { CardList } from "entities/product";
import { ProductInCartCounter } from "features/productCounter";
import { RemoveFromCartIcon } from "features/removeFromCart";

interface ItemsListProps {
	items: CartItem[];
}

export const CartItemsList: React.FC<ItemsListProps> = ({ items }) => {
	return (
		<CardList<CartItem>
			items={items}
			renderCardBottomSlot={(product: CartItem) => {
				return <ProductInCartCounter product={product} withSummary />;
			}}
			renderCardActionsSlot={(id) => {
				return <RemoveFromCartIcon id={id} />;
			}}
		/>
	);
};
