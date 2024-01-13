import Product from "../src/entities/Product";
import { DomainExceptionValidation } from "../src/validation/DomainExceptionValidation";

test('CreateCategory_WithValidParameters_ResultObjectValidState', () => {
    expect(() => {
        new Product({ id: 1, name: "Product Name", description: "Product Description", price: 99.99, stock: 99, image: "Product Image" })
    }).not.toThrow();
});


test('CreateCategory_NegativeIdValue_DomainExceptionInvalidId', () => {
    expect(() => {
        new Product({ id: -1, name: "Product Name", description: "Product Description", price: 99.99, stock: 99, image: "Product Image" })
    }).toThrow(DomainExceptionValidation);
});

test('CreateCategory_ShortNameValue_DomainExceptionShortName', () => {
    expect(() => {
        new Product({ id: 1, name: "Pr", description: "Product Description", price: 99.99, stock: 99, image: "Product Image" })
    }).toThrow(DomainExceptionValidation)
});

test('CreateCategory_WithEmptyNameValue_DomainExceptionShortName', () => {
    expect(() => {
        new Product({ id: 1, name: "", description: "Product Description", price: 99.99, stock: 99, image: "Product Image" })
    }).toThrow(DomainExceptionValidation)
});