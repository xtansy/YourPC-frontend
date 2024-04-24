import { PersistGate } from "redux-persist/integration/react";

import { persistedStore } from "../store";

export const withPersistedStore = (component: () => React.ReactNode) => () => {
	return (
		<PersistGate loading={null} persistor={persistedStore}>
			{component()}
		</PersistGate>
	);
};
