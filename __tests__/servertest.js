const supertest=require("supertest")
const server=require("../server")

const db=require("../data/config")


beforeEach(async ()=>{
    await db.seed.run()
})

beforeAll(async ()=>{
    await db.migrate.rollback()
    await db.mingrate.latest()
}) //make sure you dont put it on production databse

afterAll(async ()=>{
    //close the opened database connection

await db.destroy()
})
describe(" Integration testeing with serverData",()=>{
    it("gets a list of users with their email", async ()=>{
        const res=await supertest(server).get("/serverdata")
        // console.log(res)
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body[0].id).toBe(1)
        expect(res.body[0].name).toBe("dipesh koirala")
        // expect(res.body.message).toBe("Welcome to our API")
    console.log(res.body)
    })

    it("gets a single hobbit by id",async (id)=>{

        const res=await supertest(server).get("/serverdata/2")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.id).toBe(2)
        expect(res.body.name).toBe("raju lama")
    })

    it("returns an error for hobbit not found",async ()=>{

    })

    it("creates a new user",()=>{
        const res=await supertest(server)
        .post("/serverdata")
        .send({name:"dipesh",email:"dkoirala@goodmail.com"})
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.name).toBe("dipesh")
        expect(res.body.id).toBeDefined()
    })
})