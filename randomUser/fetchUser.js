const URL = `https://randomuser.me/api/`;

const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const person = data.results[0];
  const { first, last } = person.name;
  const { number, name } = person.location.street;
  const { email } = person;
  const { password } = person.login;
  const { age } = person.dob;
  const { large: image } = person.picture;
  const phone = person.phone;

  return {
    image,
    name: `${first} ${last}`,
    street: `${number} ${name}`,
    email,
    phone,
    password,
    age,
  };
};
export default getUser;
