

const response = await fetch('http://localhost:3000/garret');

const first_name = await response.text();

expect(first_name).toBe("garret");