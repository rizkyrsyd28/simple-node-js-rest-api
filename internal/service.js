import { Data } from "./repo.js";

export class Service {
    constructor() {
        this.db = Data.getInstance();
    }

    GetAllProduct(req, res) {
        res.write(
            JSON.stringify({
                data: this.db.data.map((value, index) => {
                    return {
                        id: index,
                        name: value,
                    };
                }),
            })
        );
        res.statusCode = 200;
        res.end();
    }
}
