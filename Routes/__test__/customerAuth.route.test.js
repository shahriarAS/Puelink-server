const { debug } = require("console");
const request = require("supertest");
const app = require("../../app.js")

describe("Customer Controller Test", () => {
    test("POST /auth/customer/register", (done) => {
        request(app)
            .post("/auth/customer/register")
            .send({
                username: "shahriar",
                email: "shahriar@gmail.com",
                password: "mynamshovon"
            })
            .expect(200)
            .then((res) => {
                debug("/auth/customer/register ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });

    test("POST /auth/customer/verify-email/:username/:randString", (done) => {
        request(app)
            .post("/auth/customer/verify-email/shahriar/l55byymxffanblwcw4")
            .expect(200)
            .then((res) => {
                debug("/auth/customer/verify-email/:username/:randString ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });

    test("POST /auth/customer/login", (done) => {
        request(app)
            .post("/auth/customer/login")
            .send({
                usernameOrEmail: "shahriar",
                password: "mynamshovon"
            })
            .expect(200)
            .then((res) => {
                debug("/auth/customer/login ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });

    test("GET /auth/customer/view", (done) => {
        request(app)
            .get("/auth/customer/view")
            .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoYWhyaWFyIiwidXNlcklEIjoiNjJjMTk1MjNjYzU0ZWMyNGYzOGFiZTEzIiwidXNlclJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY1Njg1ODg0MCwiZXhwIjoxNjU4MTU0ODQwfQ.8cmubkrWf7CZC4SzQpgh-2bfi1-Vvg7eeXGxawDzzwY")
            .expect(200)
            .then((res) => {
                debug("/auth/customer/view ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });

    test("POST /auth/customer/forgot-pass", (done) => {
        request(app)
            .post("/auth/customer/forgot-pass")
            .send({
                email: "shahriar@gmail.com"
            })
            .expect(200)
            .then((res) => {
                debug("/auth/customer/forgot-pass ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });

    test("POST /auth/customer/reset-pass/:username/:randString", (done) => {
        request(app)
            .post("/auth/customer/reset-pass/shahriar/l55fnce7vv1s1pt9hh")
            .send({
                newPassword: "mynamshovon2"
            })
            .expect(200)
            .then((res) => {
                debug("/auth/customer/reset-pass/:username/:randString ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });

    test("POST /auth/customer/change-pass", (done) => {
        request(app)
            .post("/auth/customer/change-pass")
            .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoYWhyaWFyIiwidXNlcklEIjoiNjJjMTk1MjNjYzU0ZWMyNGYzOGFiZTEzIiwidXNlclJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY1Njg1ODg0MCwiZXhwIjoxNjU4MTU0ODQwfQ.8cmubkrWf7CZC4SzQpgh-2bfi1-Vvg7eeXGxawDzzwY")
            .send({
                oldPassword: "mynamshovon2",
                newPassword: "mynamshovon3"
            })
            .expect(200)
            .then((res) => {
                debug("/auth/customer/change-pass ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });

    test("POST /auth/customer/delete-user", (done) => {
        request(app)
            .post("/auth/customer/delete-user")
            .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoYWhyaWFyIiwidXNlcklEIjoiNjJjMTk1MjNjYzU0ZWMyNGYzOGFiZTEzIiwidXNlclJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY1Njg1ODg0MCwiZXhwIjoxNjU4MTU0ODQwfQ.8cmubkrWf7CZC4SzQpgh-2bfi1-Vvg7eeXGxawDzzwY")
            .send({
                password: "mynamshovon3",
            })
            .expect(200)
            .then((res) => {
                debug("/auth/customer/delete-user ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });


});
