class AppError {
    constructor(public readonly message: string, public readonly statusCode: number) {
        this.statusCode = statusCode;
        this.message = message;
    }
}

export { AppError }