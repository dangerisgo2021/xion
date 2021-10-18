import { userLoginRequested } from "app/auth/actions";
import {menuItemClicked} from "app/avatar/actions";

export const requestLogin = (store) => (next) => (action) => {
    next(action);

    if (action.type === menuItemClicked.type) {
        store.dispatch(userLoginRequested())
    }
};
