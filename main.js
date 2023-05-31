import http from "http";
import { Route, Handler } from "./internal/route.js";
import { Service } from "./internal/service.js";

const service = new Service();
const server = http.createServer((request, response) => {
    const r = new Route(request, response);

    r.GET("/products", Handler(service, "GetAllProduct"));
    // r.POST("/products", Handler(service, "AddProduct"));

    r.close();
});

server.listen(3000, "localhost", () => {
    console.info("Server started on port 3000");
});
