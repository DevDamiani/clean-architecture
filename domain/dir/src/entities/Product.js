"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const DomainExceptionValidation_1 = require("../validation/DomainExceptionValidation");
class Product {
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
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get stock() {
        return this._stock;
    }
    set stock(value) {
        this._stock = value;
    }
    get image() {
        return this._image;
    }
    set image(value) {
        this._image = value;
    }
    get categoryId() {
        return this._categoryId;
    }
    set categoryId(value) {
        this._categoryId = value;
    }
    get category() {
        return this._category;
    }
    set category(value) {
        this._category = value;
    }
    constructor(args) {
        this._id = 0;
        this._name = "";
        this._description = "";
        this._price = 0;
        this._stock = 0;
        this._image = "";
        this._categoryId = 0;
        this._category = null;
        this.validateDomain(args);
        if (args.id) {
            this.id = args.id;
        }
        this.name = args.name;
        this.description = args.description;
        this.price = args.price;
        this.stock = args.stock;
        this.image = args.image;
        if (args.categoryId) {
            this.categoryId = args.categoryId;
        }
        if (args.category) {
            this.category = args.category;
        }
    }
    validateDomain(params) {
        DomainExceptionValidation_1.DomainExceptionValidation.when(params.name === null || params.name === '', "invalid name, name is required");
        DomainExceptionValidation_1.DomainExceptionValidation.when(params.name.length < 3, "invalid name, too short, minimum 3");
        DomainExceptionValidation_1.DomainExceptionValidation.when(params.description === null || params.description === '', "invalid description, description is required");
        DomainExceptionValidation_1.DomainExceptionValidation.when(params.description.length < 5, "invalid description, too short, minimum 5 chars");
        DomainExceptionValidation_1.DomainExceptionValidation.when(params.price < 0, "invalid price value");
        DomainExceptionValidation_1.DomainExceptionValidation.when(params.stock < 0, "invalid stock value");
        DomainExceptionValidation_1.DomainExceptionValidation.when(params.image.length > 250, "invalid image name, too long, maximum 250 chars");
        if (params.id) {
            DomainExceptionValidation_1.DomainExceptionValidation.when(params.id <= 0, "invalid id, ID Value");
        }
    }
}
exports.Product = Product;
