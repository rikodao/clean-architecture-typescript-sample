const TYPES = {
    User: {
        Repository: Symbol.for("UserRepository"),
        Presentator: Symbol.for("UserPresentator"),
        Intaractor: Symbol.for("UserIntaractor"),
    },
    Db: {
        DBClient: Symbol.for("DBClient"),
    }
};

export { TYPES };