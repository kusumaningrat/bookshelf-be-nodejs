const { Url } = require("../../src/commons/constants");

describe("REST API Testing", () => {
  before(() => {
    // Perform the login before running the tests
    cy.request("POST", `${Url.Api.Root}/auth`, {
      username: "kusumaningrat",
      password: "Kusuma16",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("message")
      expect(response.body).to.have.property("data")
      const { token, username } = response.body.data;
      // Store the token for future authenticated requests
      Cypress.env("authToken", token);
      // Store the username if needed for future tests
      Cypress.env("loggedInUsername", username);
    });

  });

  it("Get All Categories", () => {
    // Retrieve the authentication token from environment variables
    const authToken = Cypress.env("authToken");

    // Use the token to make authenticated requests
    cy.request({
      method: "GET",
      url: `${Url.Api.Root}/category`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data");
    });
  });

  
  it("Get Specific Category", () => {
    // Retrieve the authentication token from environment variables
    const authToken = Cypress.env("authToken");

    // Use the token to make authenticated requests
    cy.request({
      method: "GET",
      url: `${Url.Api.Root}/category/1`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data");
    });
  });

  it("Post a Category", () => {
    // Retrieve the authentication token from environment variables
    const authToken = Cypress.env("authToken");

    // Use the token to make authenticated requests
    cy.request({
      method: "POST",
      url: `${Url.Api.Root}/category`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        "category_name": "Category Test",
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data");
    });
  });

  it("Update a Category", () => {
    // Retrieve the authentication token from environment variables
    const authToken = Cypress.env("authToken");

    // Use the token to make authenticated requests
    cy.request({
      method: "PUT",
      url: `${Url.Api.Root}/category/1`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        "category_name": "Category Update Test",
      }
    })
  })

  it("Delete a Category", () => {
    // Retrieve the authentication token from environment variables
    const authToken = Cypress.env("authToken");

    // Use the token to make authenticated requests
    cy.request({
      method: "DELETE",
      url: `${Url.Api.Root}/category/1`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
  })

});
