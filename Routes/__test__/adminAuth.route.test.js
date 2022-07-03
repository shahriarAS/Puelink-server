const { debug } = require("console");
const request = require("supertest");
const app = require("../../app.js")

describe("Admin Controller Test", () => {
    test("POST /auth/admin/register", (done) => {
        request(app)
            .post("/auth/admin/register")
            .send({
                username: "shahriar",
                email: "shahriar@gmail.com",
                password: "mynamshovon"
            })
            .expect(200)
            .then((res) => {
                debug("/auth/admin/register ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });

    test("POST /auth/admin/verify-email/:username/:randString", (done) => {
        request(app)
            .post("/auth/admin/verify-email/shahriar/l55byymxffanblwcw4")
            .expect(200)
            .then((res) => {
                debug("/auth/admin/verify-email/:username/:randString ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });

    test("POST /auth/admin/login", (done) => {
        request(app)
            .post("/auth/admin/login")
            .send({
                usernameOrEmail: "shahriar",
                password: "mynamshovon"
            })
            .expect(200)
            .then((res) => {
                debug("/auth/admin/login ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });

    test("GET /auth/admin/view", (done) => {
        request(app)
            .get("/auth/admin/view")
            .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoYWhyaWFyIiwidXNlcklEIjoiNjJjMTk1MjNjYzU0ZWMyNGYzOGFiZTEzIiwidXNlclJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY1Njg1ODg0MCwiZXhwIjoxNjU4MTU0ODQwfQ.8cmubkrWf7CZC4SzQpgh-2bfi1-Vvg7eeXGxawDzzwY")
            .expect(200)
            .then((res) => {
                debug("/auth/admin/view ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });

    test("POST /auth/admin/forgot-pass", (done) => {
        request(app)
            .post("/auth/admin/forgot-pass")
            .send({
                email: "shahriar@gmail.com"
            })
            .expect(200)
            .then((res) => {
                debug("/auth/admin/forgot-pass ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });

    test("POST /auth/admin/reset-pass/:username/:randString", (done) => {
        request(app)
            .post("/auth/admin/reset-pass/shahriar/l55fnce7vv1s1pt9hh")
            .send({
                newPassword: "mynamshovon2"
            })
            .expect(200)
            .then((res) => {
                debug("/auth/admin/reset-pass/:username/:randString ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });

    test("POST /auth/admin/change-pass", (done) => {
        request(app)
            .post("/auth/admin/change-pass")
            .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoYWhyaWFyIiwidXNlcklEIjoiNjJjMTk1MjNjYzU0ZWMyNGYzOGFiZTEzIiwidXNlclJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY1Njg1ODg0MCwiZXhwIjoxNjU4MTU0ODQwfQ.8cmubkrWf7CZC4SzQpgh-2bfi1-Vvg7eeXGxawDzzwY")
            .send({
                oldPassword: "mynamshovon2",
                newPassword: "mynamshovon3"
            })
            .expect(200)
            .then((res) => {
                debug("/auth/admin/change-pass ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });

    test("POST /auth/admin/delete-user", (done) => {
        request(app)
            .post("/auth/admin/delete-user")
            .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoYWhyaWFyIiwidXNlcklEIjoiNjJjMTk1MjNjYzU0ZWMyNGYzOGFiZTEzIiwidXNlclJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY1Njg1ODg0MCwiZXhwIjoxNjU4MTU0ODQwfQ.8cmubkrWf7CZC4SzQpgh-2bfi1-Vvg7eeXGxawDzzwY")
            .send({
                password: "mynamshovon3",
            })
            .expect(200)
            .then((res) => {
                debug("/auth/admin/delete-user ", res.body.msg)
                done()
            }
            )
            .catch(err => {
                done(err)
            })
    });


});
