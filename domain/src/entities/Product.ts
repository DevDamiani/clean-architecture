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

    public id: number = 0;
    public name: string = "";
    public description: string = "";
    public price: number = 0;
    public stock: number = 0;
    public image: string = "";

    public categoryId: number = 0;
    public category: Category | null = null;

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


