const { debug } = require("console");
const request = require("supertest");
const app = require("../../app.js");
const userModel = require("../../Models/user.js");

describe("Customer Controller Test", () => {
    let username = "shahriar"
    let email = "shahriar@gmail.com"
    let password = "mynamshovon"
    let token = ""
    let randString = ""

    test("POST /auth/customer/register", (done) => {
        request(app)
            .post("/auth/customer/register")
            .send({
                username: username,
                email: email,
                password: password
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

    let currentUser = await userModel.find({ username: username })
    randString = currentUser.randString

    test("POST /auth/customer/verify-email/:username/:randString", (done) => {
        request(app)
            .post(`/auth/customer/verify-email/${username}/${randString}`)
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
                usernameOrEmail: username,
                password: password
            })
            .expect(200)
            .then((res) => {
                debug("/auth/customer/login ", res.body.msg)
                token = res.body.token
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
            .set("Authorization", `Bearer ${token}`)
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
                email: email
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


    currentUser = await userModel.find({ username: username })
    randString = currentUser.randString

    test("POST /auth/customer/reset-pass/:username/:randString", (done) => {
        request(app)
            .post(`/auth/customer/reset-pass/${username}/${randString}`)
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
            .set("Authorization", `Bearer ${token}`)
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
            .set("Authorization", `Bearer ${token}`)
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
