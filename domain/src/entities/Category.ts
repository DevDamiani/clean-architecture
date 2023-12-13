import { DomainExceptionValidation } from "../validation/DomainExceptionValidation";
import { Product } from "./Product";

export interface CategoryParams {
    id?: number,
    name: string,
    products?: Array<Product>
}

export default class Category {

    private _id: number = 0;
    private _name: string = "";
    private _products: Array<Product> = [];


    public get id(): number {
        return this._id;
    }
    private set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }
    private set name(value: string) {
        this._name = value;
    }

    public get products(): Array<Product> {
        return this._products;
    }
    private set products(value: Array<Product>) {
        this._products = value;
    }

    constructor(args: CategoryParams){

        this.validateDomain(args)

        if (args.id) {
            this.id = args.id
        }

        if (args.products) {
            this.products = args.products
        }

        this.name = args.name

    }

    private validateDomain(params: CategoryParams){

        DomainExceptionValidation.when(params.name === null || params.name === ''
            , "invalid name, name is required")

        DomainExceptionValidation.when(params.name.length < 3
            , "invalid name, too short, minimum 3")

        if (params.id) {
            DomainExceptionValidation.when(params.id <= 0
                , "invalid id, ID Value")
        }

    }

}



