"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainExceptionValidation = void 0;
class DomainExceptionValidation extends Error {
    constructor(message) {
        super(message);
    }
    static when(condition, message) {
        if (condition)
            throw new DomainExceptionValidation(message);
    }
}
exports.DomainExceptionValidation = DomainExceptionValidation;
