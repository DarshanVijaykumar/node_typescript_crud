import { Request, Response } from "express";

import {
  apiAddItem,
  apiReadItems,
  apiUpdateItem,
} from "../../controllers/shoppingItem.controller";

// Mock Express Request and Response objects
const mockRequest = (): Request => {
  const req = {} as Request;
  req.body = jest.fn();
  req.params = jest.fn() as any;
  return req;
};

const mockResponse = (): Response => {
  const res = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

// Unit tests for apiAddItem function
describe("apiAddItem", () => {
  it("should add a new item and return status 201", () => {
    const req = mockRequest();
    const res = mockResponse();
    const expectedResponse = { id: "generated-id", name: "New Item" };

    // Call the function
    apiAddItem(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expectedResponse);
  });

  it("should return status 500 with error message if an error occurs", () => {
    const req = mockRequest();
    const res = mockResponse();
    const errorMessage = "Internal Server Error";

    // Call the function
    apiAddItem(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
  });
});

// Unit tests for apiReadItems function
describe("apiReadItems", () => {
  it("should return status 200 and the list of items", () => {
    const req = mockRequest();
    const res = mockResponse();
    const expectedResponse = [
      { id: "1", name: "Item 1" },
      { id: "2", name: "Item 2" },
    ];

    apiReadItems(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expectedResponse);
  });

  it("should return status 500 with error message if an error occurs", () => {
    const req = mockRequest();
    const res = mockResponse();
    const errorMessage = "Internal Server Error";

    apiReadItems(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
  });
});

// Unit tests for apiUpdateItem function
describe("apiUpdateItem", () => {
  it("should update an item and return status 204", () => {
    const req = mockRequest();
    const res = mockResponse();
    req.body = { name: "Updated Item" };
    req.params = { id: "existing-id" };

    apiUpdateItem(req, res);

    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.json).toHaveBeenCalledWith(undefined);
  });

  it("should return status 500 with error message if an error occurs", () => {
    const req = mockRequest();
    const res = mockResponse();
    const errorMessage = "Internal Server Error";

    apiUpdateItem(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
  });
});
