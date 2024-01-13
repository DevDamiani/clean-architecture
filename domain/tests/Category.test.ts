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

test('CreateCategory_ShortNameValue_DomainExceptionShortName', () => {
  expect(() => {
    new Category({id: 1, name: "Ca" })
  }).toThrow(DomainExceptionValidation)
});

test('CreateCategory_WithEmptyNameValue_DomainExceptionShortName', () => {
  expect(() => {
    new Category({id: 1, name: "" })
  }).toThrow(DomainExceptionValidation)
});