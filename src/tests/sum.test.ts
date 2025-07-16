import { beforeEach, describe, expect, it } from "vitest";
import {app} from "../index"
import request from "supertest";
import cleardB from "./helpers/reset-db";

describe("POST /sum", () => {
    //before each test runs ->clear the dB
    beforeEach(async()=>{
        console.log("clearing the dB");
        await cleardB  ();

    })
    it("should sum add 2 numbers", async () => {
        const { status, body } = await request(app).post('/sum').send({
            a: 1,
            b: 2
        })
        expect(status).toBe(200);
        expect(body).toEqual({ answer: 3, id: expect.any(Number) });
    });
     it("should sum add 2 numbers", async () => {
        const { status, body } = await request(app).post('/sum').send({
            a:4,
            b: 8
        })
        expect(status).toBe(200);
        expect(body).toEqual({ answer: 12, id: expect.any(Number) });
    });

})