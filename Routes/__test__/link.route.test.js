const { debug } = require("console")
const request = require("supertest")
const app = require("../../app.js")

describe("Link Controller Test", () => {

    test("GET /link/all-view", (done) => {
        request(app)
            .get("/link/all-view")
            .expect(200)
            .then((res) => {
                debug("/link/all-view ", res.body)
                done()
            })
            .catch(err => {
                done(err)
            })
    })

    test("GET /link/view/:linkId", (done) => {
        request(app)
            .get("/link/view/l55l0wa1wxn8ljgxd4e")
            .expect(200)
            .then((res) => {
                debug("/link/view/:linkId ", res.body)
                done()
            })
            .catch(err => {
                done(err)
            })
    })

    test("POST /link/add", (done) => {
        request(app)
            .post("/link/add")
            .send({
                originalLink: "https://google.com",
                shortLink: "shovon"
            })
            .expect(200)
            .then((res) => {
                debug("/link/add ", res.body)
                done()
            })
            .catch(err => {
                done(err)
            })
    })

    test("PUT /link/update/:linkId", (done) => {
        request(app)
            .put("/link/update/l55kzyxbc1lm9q2ej35")
            .send({
                shortLink: "asdhovon110",
                status: "Paused"
            })
            .expect(200)
            .then((res) => {
                debug("/link/update/:linkId ", res.body)
                done()
            })
            .catch(err => {
                done(err)
            })
    })

    test("DELETE /link/delete/:linkId", (done) => {
        request(app)
            .delete("/link/delete/l55kzyxbc1lm9q2ej35")
            .expect(200)
            .then((res) => {
                debug("/link/delete/:linkId ", res.body)
                done()
            })
            .catch(err => {
                done(err)
            })
    })
})
