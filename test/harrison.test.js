const fetch = require("node-fetch2");

it("It is a callback function",async ()=>{
    const response = await fetch('http://localhost:3000/harrison');
    let first_name = await response.text();
    expect(first_name).toBe('Hello Harrison');
})

