import request from "supertest";
import express from "express";
import routes from "../../routes/shoppingItem.route";

const app = express();
app.use(express.json());
app.use("/", routes);

describe("Shopping Item Routes", () => {
  test("GET /shopping-list", async () => {
    const response = await request(app).get("/shopping-list");
    expect(response.status).toBe(200);
    // Add more assertions as needed
  });

  test("POST /shopping-list", async () => {
    const response = await request(app).post("/shopping-list").send({
      /* Your request body for testing */
    });
    expect(response.status).toBe(201);
    // Add more assertions as needed
  });

  test("PUT /shopping-list/:id", async () => {
    const response = await request(app)
      .put("/shopping-list/123") // Replace 123 with a valid ID for testing
      .send({
        /* Your request body for testing */
      });
    expect(response.status).toBe(204);
    // Add more assertions as needed
  });
});
