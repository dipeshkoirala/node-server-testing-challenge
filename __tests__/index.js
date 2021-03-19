const supertest=require("supertest")
const  server=require("../server")

test("Testing the testfile", ()=>{
    expect(10-5).toBeGreaterThan(4)
})

test("[GET::/",  async ()=>{
const res= await supertest(server).get("/")

//console.log(res)
expect(res.status).toBe(200)
expect(res.text).toBe(/Welcome to our API/i)
})