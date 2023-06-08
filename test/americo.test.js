const response = await fetch('http://localhost:3000/americo');

const first_name = await response.text();

expect(first_name).toBe('americo');