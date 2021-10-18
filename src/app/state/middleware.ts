import { logger } from "app/state/utils/middleware/logger";
import { throttle } from "app/state/utils/middleware/throttle";
import { debounce } from "app/state/utils/middleware/debounce";
import { getLatestSession } from "app/auth/middleware/getLatestSession";
import { endSession } from "app/auth/middleware/endSession";
import { startSession } from "app/auth/middleware/startSession";
import { addForm } from "app/forms/middleware/addForm";
import { updateFormOnSave } from "app/forms/middleware/updateFormOnSave";
import { addCatalogItem } from "app/catalog/middleware/addCatalogItem";
import { sendCatalogItemEditOnOk } from "app/catalog/middleware/sendCatalogItemEditOnOk";
import { registerVendor } from "app/catalog/middleware/registerVendor";
import { cancelOrder } from "app/orders/middleware/cancelOrder";
import { completeOrder } from "app/orders/middleware/completeOrder";
import { saveFrontDeskFormsMiddleware } from "app/orders/middleware/saveFrontDeskFormsMiddleware";
import { createOrderReport } from "app/reports/middleware/createOrderReport";
import { assignOrder } from "app/orders/middleware/assignOrder";
import { getCheckoutSummary } from "app/checkout/middleware/getCheckoutSummary";
import { requestLogin } from "app/avatar/middleware/requestLogin";

export const middleware = [
  throttle,
  debounce,
  logger,
  endSession,
  getLatestSession,
  startSession,
  addForm,
  updateFormOnSave,
  addCatalogItem,
  sendCatalogItemEditOnOk,
  registerVendor,
  cancelOrder,
  completeOrder,
  saveFrontDeskFormsMiddleware,
  createOrderReport,
  assignOrder,
  getCheckoutSummary,
  requestLogin,
];
