"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/modules/manual-payment/index.ts
const service_1 = __importDefault(require("./service"));
const utils_1 = require("@medusajs/framework/utils");
exports.default = (0, utils_1.ModuleProvider)(utils_1.Modules.PAYMENT, {
    services: [service_1.default],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9tYW51YWwtcGF5bWVudC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNDQUFzQztBQUN0Qyx3REFBb0Q7QUFDcEQscURBR2tDO0FBRWxDLGtCQUFlLElBQUEsc0JBQWMsRUFBQyxlQUFPLENBQUMsT0FBTyxFQUFFO0lBQzdDLFFBQVEsRUFBRSxDQUFDLGlCQUE0QixDQUFDO0NBQ3pDLENBQUMsQ0FBQSJ9