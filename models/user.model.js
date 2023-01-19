const { faker } = require("@faker-js/faker");

const createUser = () => {
  const newUser = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    _id: faker.datatype.uuid(),
  };
  return newUser;
};

const createCompany = () => {
  const newCompany = {
    companyName: faker.company.name(),
    street: faker.address.street(),
    city: faker.address.city(),
    state: faker.name.lastName(),
    zipCode: faker.address.zipCode(),
    country: faker.address.country(),
    _id: faker.datatype.uuid(),
  };
  return newCompany;
};

const newuser = createUser();
const newcompany = createCompany();
const combo = {...newcompany,...newuser}
console.log(combo)


module.exports = {createUser, createCompany, newuser, newcompany};









// console.log(newuser);
// console.log(newcompany);