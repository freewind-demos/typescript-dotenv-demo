import dotenv from 'dotenv';

const env = dotenv.config({
  path: 'my.env'
});

console.log(env)
console.log(env.parsed!.hello)
console.log(process.env.hello)
