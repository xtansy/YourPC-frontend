import { withRouter } from "./withRouter";
import { withStore } from "./withStore";
import { withPersistedStore } from "./withPersistedStore";

import { compose } from "./compose";

export const withProvider = compose(withRouter, withStore, withPersistedStore);
