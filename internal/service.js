import { Data } from "./repo.js";

export class Service {
    constructor() {
        this.db = Data.getInstance();
    }

    GetJSONData() {
        return JSON.stringify({
            data: this.db.data.map((value, index) => {
                return {
                    id: index,
                    name: value,
                };
            }),
        });
    }

    GetAllProduct(req, res) {
        res.write(this.GetJSONData());
        res.statusCode = 200;
        res.end();
    }

    AddProduct(req, res) {
        req.addListener("data", (data) => {
            const body = JSON.parse(data.toString());

            this.db.data.push(body.name);

            res.write(this.GetJSONData());

            res.end();
        });
    }

    UpdateProduct(req, res) {
        req.addListener("data", (data) => {
            const body = JSON.parse(data.toString());

            if (this.db.data[body.id]) {
                this.db.data[body.id] = body.name;
            }

            res.write(this.GetJSONData());
            res.end();
        });
    }

    DeleteProduct(req, res) {
        req.addListener("data", (data) => {
            const body = JSON.parse(data.toString());

            if (this.db.data[body.id]) {
                delete this.db.data[body.id];
            }

            res.write(this.GetJSONData());
            res.end();
        });
    }
}
