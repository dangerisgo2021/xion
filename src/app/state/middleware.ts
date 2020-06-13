import { logger } from "app/state/utils/middleware/logger";
import { throttle } from "app/state/utils/middleware/throttle";
import { debounce } from "app/state/utils/middleware/debounce";
import { login } from "app/auth/middleware/login";
import { logout } from "app/auth/middleware/logout";

export const middleware = [throttle, debounce, logger, login, logout];
