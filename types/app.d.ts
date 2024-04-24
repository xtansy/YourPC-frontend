/**
 * ⚠️ FSD
 *
 * Its hack way to export redux infering types from @/app
 * and use it in @/shared/model/hooks.ts
 */

type RootState = import("../src/app/store").RootState;
type AppDispatch = import("../src/app/store").AppDispatch;
