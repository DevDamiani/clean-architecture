import Category from "../src/entities/Category";
import { DomainExceptionValidation } from "../src/validation/DomainExceptionValidation";


test('CreateCategory_WithValidParameters_ResultObjectValidState', () => {
  expect(() => {
    new Category({id: 1, name: "Category Name" })
  }).not.toThrow();

});

test('CreateCategory_NegativeIdValue_DomainExceptionInvalidId', () => {
  expect(() => {
    new Category({id: -1, name: "Category Name" })
  }).toThrow(DomainExceptionValidation);
});