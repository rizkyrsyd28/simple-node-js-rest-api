// Singleton Class For Data Test

export class Data {
    constructor() {
        this.data = ["Chair", "Table", "Cupboard"];
    }

    static getInstance() {
        if (!Data.instance) {
            Data.instance = new Data();
        }
        return Data.instance;
    }
}
