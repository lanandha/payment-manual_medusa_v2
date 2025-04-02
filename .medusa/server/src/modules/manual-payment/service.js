"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/modules/manual-payment/service.ts
const utils_1 = require("@medusajs/framework/utils");
class ManualPaymentProviderService extends utils_1.AbstractPaymentProvider {
    constructor(container, options) {
        super(container, options);
        this.logger_ = container.logger;
        this.options_ = options;
    }
    static validateOptions(options) {
        // Add validation if needed
        return options;
    }
    async initiatePayment(input) {
        const { amount, currency_code, context } = input;
        // For manual payment, we just need to return an ID and data
        return {
            id: `manual_${Date.now()}`,
            data: {
                status: "pending",
                amount,
                currency_code,
                ...context
            }
        };
    }
    async authorizePayment(input) {
        // For manual payment, we can simply authorize without external API calls
        return {
            data: {
                ...input.data,
                status: "authorized"
            },
            status: "authorized" // Could also be "requires_capture" if you want to manually capture later
        };
    }
    async capturePayment(input) {
        // For manual payment, we just update the status
        return {
            data: {
                ...input.data,
                status: "captured"
            }
        };
    }
    async refundPayment(input) {
        // For manual payment, we just update the status
        return {
            data: {
                ...input.data,
                status: "refunded"
            }
        };
    }
}
ManualPaymentProviderService.identifier = "manual_payment";
exports.default = ManualPaymentProviderService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL21hbnVhbC1wYXltZW50L3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBd0M7QUFDeEMscURBVWtDO0FBWWxDLE1BQU0sNEJBQTZCLFNBQVEsK0JBQWdDO0lBTXpFLFlBQ0UsU0FBK0IsRUFDL0IsT0FBZ0I7UUFFaEIsS0FBSyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUE7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUE7SUFDekIsQ0FBQztJQUVELE1BQU0sQ0FBQyxlQUFlLENBQUMsT0FBeUI7UUFDOUMsMkJBQTJCO1FBQzNCLE9BQU8sT0FBTyxDQUFBO0lBQ2hCLENBQUM7SUFFRCxLQUFLLENBQUMsZUFBZSxDQUNuQixLQUEyQjtRQUUzQixNQUFNLEVBQ0osTUFBTSxFQUNOLGFBQWEsRUFDYixPQUFPLEVBQ1IsR0FBRyxLQUFLLENBQUE7UUFFVCw0REFBNEQ7UUFDNUQsT0FBTztZQUNMLEVBQUUsRUFBRSxVQUFVLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUMxQixJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLE1BQU07Z0JBQ04sYUFBYTtnQkFDYixHQUFHLE9BQU87YUFDWDtTQUNGLENBQUE7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLGdCQUFnQixDQUNwQixLQUE0QjtRQUU1Qix5RUFBeUU7UUFDekUsT0FBTztZQUNMLElBQUksRUFBRTtnQkFDSixHQUFHLEtBQUssQ0FBQyxJQUFJO2dCQUNiLE1BQU0sRUFBRSxZQUFZO2FBQ3JCO1lBQ0QsTUFBTSxFQUFFLFlBQVksQ0FBQyx5RUFBeUU7U0FDL0YsQ0FBQTtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsY0FBYyxDQUNsQixLQUEwQjtRQUUxQixnREFBZ0Q7UUFDaEQsT0FBTztZQUNMLElBQUksRUFBRTtnQkFDSixHQUFHLEtBQUssQ0FBQyxJQUFJO2dCQUNiLE1BQU0sRUFBRSxVQUFVO2FBQ25CO1NBQ0YsQ0FBQTtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsYUFBYSxDQUNqQixLQUF5QjtRQUV6QixnREFBZ0Q7UUFDaEQsT0FBTztZQUNMLElBQUksRUFBRTtnQkFDSixHQUFHLEtBQUssQ0FBQyxJQUFJO2dCQUNiLE1BQU0sRUFBRSxVQUFVO2FBQ25CO1NBQ0YsQ0FBQTtJQUNILENBQUM7O0FBeEVNLHVDQUFVLEdBQUcsZ0JBQWdCLENBQUE7QUEyRXRDLGtCQUFlLDRCQUE0QixDQUFBIn0=