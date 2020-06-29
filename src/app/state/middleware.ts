import { logger } from "app/state/utils/middleware/logger";
import { throttle } from "app/state/utils/middleware/throttle";
import { debounce } from "app/state/utils/middleware/debounce";
import { login } from "app/auth/middleware/login";
import { logout } from "app/auth/middleware/logout";
import { addForm } from "app/forms/middleware/addForm";
import { updateFormOnSave } from "app/forms/middleware/updateFormOnSave";

export const middleware = [
  throttle,
  debounce,
  logger,
  login,
  logout,
  addForm,
  updateFormOnSave,
];
