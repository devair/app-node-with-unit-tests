import request from "supertest";
import { app } from "../app";

describe("UserController", () => {
  it("should create a new user", async () => {
    const response = await request(app)
      .post("/users")
      .send({
        name: "John Doe",
        email: "john@example.com"
      });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("John Doe");
    expect(response.body.email).toBe("john@example.com");
  });

  it("should get all users", async () => {
    const response = await request(app).get("/users");
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
