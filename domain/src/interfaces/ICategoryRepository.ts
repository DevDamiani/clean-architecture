import Category from '../entities/Category'

export default interface ICategoryRepository {


    GetCategories(): Array<Category>
    GetByID(id: number): Category

    Create(category: Category): Category
    Update(category: Category): Category
    Remove(category: Category): Category

}