import { DomainExceptionValidation } from '../validation/DomainExceptionValidation';
import Category from './Category'

export interface ProductParams {
    id?: number,
    name: string,
    description: string,
    price: number,
    stock: number,
    image: string,
    categoryId?: number,
    category?: Category
}

export default class Product {

    private _id: number = 0;
    private _name: string = "";
    private _description: string = "";
    private _price: number = 0;
    private _stock: number = 0;
    private _image: string = "";

    private _categoryId: number = 0;
    private _category: Category | null = null;


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
    
    public get description(): string {
        return this._description;
    }
    private set description(value: string) {
        this._description = value;
    }

    public get price(): number {
        return this._price;
    }
    private set price(value: number) {
        this._price = value;
    }

    public get stock(): number {
        return this._stock;
    }
    private set stock(value: number) {
        this._stock = value;
    }

    public get image(): string {
        return this._image;
    }
    private set image(value: string) {
        this._image = value;
    }

    public get categoryId(): number {
        return this._categoryId;
    }
    private set categoryId(value: number) {
        this._categoryId = value;
    }

    public get category(): Category | null {
        return this._category;
    }
    private set category(value: Category) {
        this._category = value;
    }

    constructor(args: ProductParams){

        this.validateDomain(args)

        if (args.id) {
            this.id = args.id
        }

        this.name = args.name
        this.description = args.description
        this.price = args.price
        this.stock = args.stock
        this.image = args.image

        if (args.categoryId) {
            this.categoryId = args.categoryId
        }    

        if (args.category) {
            this.category = args.category
        }
        

    }

    private validateDomain(params: ProductParams){

        DomainExceptionValidation.when(params.name === null || params.name === ''
            , "invalid name, name is required")
        DomainExceptionValidation.when(params.name.length < 3
            , "invalid name, too short, minimum 3")
        
        DomainExceptionValidation.when(params.description === null || params.description === ''
            , "invalid description, description is required")
        DomainExceptionValidation.when(params.description.length < 5
            , "invalid description, too short, minimum 5 chars")

        DomainExceptionValidation.when(params.price < 0, "invalid price value")

        DomainExceptionValidation.when(params.stock < 0, "invalid stock value")

        DomainExceptionValidation.when(params.image.length > 250
            , "invalid image name, too long, maximum 250 chars")

        if (params.id) {
            DomainExceptionValidation.when(params.id <= 0
                , "invalid id, ID Value")
        }

    }


}


