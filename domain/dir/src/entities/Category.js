"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DomainExceptionValidation_1 = require("../validation/DomainExceptionValidation");
class Category {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get products() {
        return this._products;
    }
    set products(value) {
        this._products = value;
    }
    constructor(args) {
        this._id = 0;
        this._name = "";
        this._products = [];
        this.validateDomain(args);
        if (args.id) {
            this.id = args.id;
        }
        if (args.products) {
            this.products = args.products;
        }
        this.name = args.name;
    }
    validateDomain(params) {
        DomainExceptionValidation_1.DomainExceptionValidation.when(params.name === null || params.name === '', "invalid name, name is required");
        DomainExceptionValidation_1.DomainExceptionValidation.when(params.name.length < 3, "invalid name, too short, minimum 3");
        if (params.id) {
            DomainExceptionValidation_1.DomainExceptionValidation.when(params.id <= 0, "invalid id, ID Value");
        }
    }
}
exports.default = Category;
