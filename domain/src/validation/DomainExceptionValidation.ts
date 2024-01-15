export class DomainExceptionValidation extends Error {

    constructor(message: string) {
        super(message);
    }

    static when(condition:boolean, message: string) {
        if(condition)
            throw new DomainExceptionValidation(message)
    }

}