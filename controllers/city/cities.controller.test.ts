import request from "supertest";
import server from "../../server";

const cities = require("../../utils/cities.json");

describe("GET Endpoints", () => {
  // describe GET Endpoints

  it("Should get all the México cities", async (done) => {
    // it Should get all the México cities
    const response = await request(server).get("/city/getAll");
    expect(response.status).toBe(200); // expect status
    expect(response.body).toEqual(cities); // expect body
    done(); // done
  });
  it("Should get a city by name", async (done) => {
    // it Should get a city by name
    const cityName = "Tepezalá";
    const response = await request(server).get(`/city/getByName/${cityName}`); // request
    console.log("Response ", response.body);
    expect(response.status).toBe(200); // expect status
    expect(response.body).toEqual(
      cities.find((c: { name: string }) => c.name === cityName)
    ); // expect body
    done(); // done
  });
  afterAll(async () => server.close());
});
