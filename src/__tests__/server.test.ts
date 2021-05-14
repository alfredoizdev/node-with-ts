import jest from 'jest';
import { app } from '../server';
import request from "supertest";

const setData = "JOHN0000MICHAEL0009994567";

describe("POST api/v1", () => {


    test("Give the data, should response with status 200", async done => {
        const result = await request(app).post("/api/v1")
            .send({ data: setData });
        expect(result.statusCode)
            .toEqual(200);
        done();
    })



    test("Is no passing any data, should response with status 400", async done => {
        const result = await request(app).post("/api/v1")
            .send({ data: "" });
        expect(result.statusCode)
            .toEqual(400)
        done();
    })

    test("Is no passing any data, the response should have message prop}", async done => {
        const result = await request(app).post("/api/v1")
            .send({ data: "" });
        expect(result.body.message).toBeDefined();
        done();
    });

    test("Is no passing any data, should response {need suplay data}", async done => {
        const result = await request(app).post("/api/v1")
            .send({ data: "" });
        expect(result.body.message)
            .toEqual("need suplay data")
        done();
    })



    test("Should specify json in content type header", async done => {
        const result = await request(app).post("/api/v1")
            .send({ data: setData });
        expect(result.headers['content-type'])
            .toEqual(expect.stringContaining("json"))
        done();
    });


    test(`passing data ${setData} should give back firstName lastName clientId`, async done => {
        const result = await request(app).post("/api/v1")
            .send({ data: setData });
        expect(result.body.data.firstName).toBeDefined();
        expect(result.body.data.lastName).toBeDefined();
        expect(result.body.data.clientId).toBeDefined();
        done();
    });

    describe(`On passing data ${setData}`, () => {

        test("Should be firstName={JOHN0000}", async done => {
            const result = await request(app).post("/api/v1")
                .send({ data: setData });
            expect(result.body.data.firstName).toEqual("JOHN0000");
            done();
        });
        test("Should be lastName={MICHAEL000}", async done => {
            const result = await request(app).post("/api/v1")
                .send({ data: setData });
            expect(result.body.data.lastName).toEqual("MICHAEL000");
            done();
        });
        test("Should be clientId={9994567}", async done => {
            const result = await request(app).post("/api/v1")
                .send({ data: setData });
            expect(result.body.data.clientId).toEqual("9994567");
            done();
        });
    });

});

describe("POST api/v2", () => {


    test("Give the data, should response with status 200", async done => {
        const result = await request(app).post("/api/v2")
            .send({ data: setData });
        expect(result.statusCode)
            .toEqual(200);
        done();
    })



    test("Is no passing any data, should response with status 400", async done => {
        const result = await request(app).post("/api/v2")
            .send({ data: "" });
        expect(result.statusCode)
            .toEqual(400)
        done();
    });

    test("Is no passing any data, the response should have message prop}", async done => {
        const result = await request(app).post("/api/v2")
            .send({ data: "" });
        expect(result.body.message).toBeDefined();
        done();
    });

    test("Is no passing any data, should response with message {need suplay data}", async done => {
        const result = await request(app).post("/api/v2")
            .send({ data: "" });
        expect(result.body.message)
            .toEqual("need suplay data");
        done();
    });



    test("Should specify json in content type header", async done => {
        const result = await request(app).post("/api/v2")
            .send({ data: setData });
        expect(result.headers['content-type'])
            .toEqual(expect.stringContaining("json"))
        done();
    });


    test(`Pass data ${setData} should give back firstName lastName clientId`, async done => {
        const result = await request(app).post("/api/v2")
            .send({ data: setData });
        expect(result.body.data.firstName).toBeDefined();
        expect(result.body.data.lastName).toBeDefined();
        expect(result.body.data.clientId).toBeDefined();
        done();
    });

    describe(`On Passing data ${setData}`, () => {

        test("Should be firstName={JOHN}", async done => {
            const result = await request(app).post("/api/v2")
                .send({ data: setData });
            expect(result.body.data.firstName).toEqual("JOHN");
            done();
        });
        test("Should be lastName={MICHAEL}", async done => {
            const result = await request(app).post("/api/v2")
                .send({ data: setData });
            expect(result.body.data.lastName).toEqual("MICHAEL");
            done();
        });
        test("Should be clientId={999-4567}", async done => {
            const result = await request(app).post("/api/v2")
                .send({ data: setData });
            expect(result.body.data.clientId).toEqual("999-4567");
            done();
        });
    });



})
