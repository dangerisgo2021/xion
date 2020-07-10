import { logger } from "app/state/utils/middleware/logger";
import { throttle } from "app/state/utils/middleware/throttle";
import { debounce } from "app/state/utils/middleware/debounce";
import { login } from "app/auth/middleware/login";
import { logout } from "app/auth/middleware/logout";
import { addForm } from "app/forms/middleware/addForm";
import { updateFormOnSave } from "app/forms/middleware/updateFormOnSave";
import { addCatalogItem } from "app/catalog/middleware/addCatalogItem";
import { sendCatalogItemEditOnOk } from "app/catalog/middleware/sendCatalogItemEditOnOk";
import { registerVendor } from "../catalog/middleware/registerVendor";
import { cancelActiveOrder } from "../orders/middleware/cancelActiveOrder";
import { completeActiveOrder } from "../orders/middleware/completeActiveOrder";

export const middleware = [
  throttle,
  debounce,
  logger,
  login,
  logout,
  addForm,
  updateFormOnSave,
  addCatalogItem,
  sendCatalogItemEditOnOk,
  registerVendor,
  cancelActiveOrder,
  completeActiveOrder,
];
