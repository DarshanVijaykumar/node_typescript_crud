import request from "supertest";
import express from "express";
import routes from "../routes/shoppingItem.route";

const app = express();
app.use(express.json());
app.use("/", routes);

describe("Express Server", () => {
  test("responds with 404 on GET /nonexistentroute", async () => {
    const response = await request(app).get("/nonexistentroute");
    expect(response.status).toBe(404);
  });
});
