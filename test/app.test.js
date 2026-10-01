const request = require("supertest");
const app = require("../src/app");

describe("Node.js Demo App", () => {
    test("GET / should return success response", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);

        expect(response.body).toEqual({
            message: "Hello from CI/CD Node.js App!",
            status: "success"
        });
    });
});