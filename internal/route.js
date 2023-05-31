import chalk from "chalk";

export class Route {
    constructor(request, response) {
        this.request = request;
        this.response = response;
        this.response.setHeader("Content-type", "application/json");
        this.status = false;
    }

    GET(path, callback) {
        if (this.request.url === path && this.request.method === "GET") {
            try {
                callback(this.request, this.response);
                this.status = true;
                console.log(`[NODE Debug] : ${chalk.bgBlueBright.white(" " + this.request.method + " ")} ${chalk.bgGreenBright.white(" " + this.response.statusCode + " ")} \t\t ${this.request.url}`);
            } catch (error) {
                this.SERVER_ERROR(error);
            }
        }
    }

    POST(path, callback) {
        if (this.request.url === path && this.request.method === "POST") {
            try {
                callback(this.request, this.response);
                this.status = true;
                console.log(`[NODE Debug] : ${chalk.bgBlue.white(" " + this.request.method + " ")} ${chalk.bgGreenBright.white(" " + this.response.statusCode + " ")} \t\t ${this.request.url}`);
            } catch (error) {
                this.SERVER_ERROR(error);
            }
        }
    }

    PUT(path, callback) {
        if (this.request.url === path && this.request.method === "PUT") {
            try {
                callback(this.request, this.response);
                this.status = true;
                console.log(`[NODE Debug] : ${chalk.bgYellowBright.white(" " + this.request.method + " ")} ${chalk.bgGreenBright.white(" " + this.response.statusCode + " ")} \t\t ${this.request.url}`);
            } catch (error) {
                this.SERVER_ERROR(error);
            }
        }
    }

    DELETE(path, callback) {
        if (this.request.url === path && this.request.method === "DELETE") {
            try {
                callback(this.request, this.response);
                this.status = true;
                console.log(`[NODE Debug] : ${chalk.bgYellow.white(" " + this.request.method + " ")} ${chalk.bgGreenBright.white(" " + this.response.statusCode + " ")} \t\t ${this.request.url}`);
            } catch (error) {
                this.SERVER_ERROR(error);
            }
        }
    }

    SERVER_ERROR(error) {
        this.response.statusCode = 500;
        this.status = true;
        console.log(`[NODE Debug] : ${chalk.bgRed.white(" " + this.request.method + " ")} ${chalk.bgRedBright.white(" " + this.response.statusCode + " ")} \t\t ${this.request.url}\n${chalk.red(error)}`);
        this.response.end();
    }

    close() {
        if (!this.status) {
            this.response.statusCode = 400;
            this.response.write("Error");
            console.log(`[NODE Debug] : ${chalk.bgRed.white(" " + this.request.method + " ")} ${chalk.bgRedBright.white(" " + this.response.statusCode + " ")} \t\t ${this.request.url}`);
            this.response.end();
        }
    }
}

export function Handler(_class, _method) {
    return _class[_method].bind(_class);
}
