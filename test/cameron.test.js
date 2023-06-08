const response = await fetch('http://localhost:3000/cameron');

const first_name = await response.text();

expect(first_name).toBe('cameron');