import Category from '../entities/Category'

export default interface ICategoryRepository {


    GetCategories(): Promise<Array<Category>>
    GetByID(id: number): Promise<Category>

    Create(category: Category): Promise<Category>
    Update(category: Category): Promise<Category>
    Remove(category: Category): Promise<Category>

}