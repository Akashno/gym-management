export default defineEventHandler((event) => {
  const users = [{
    userId: 1,
    firstname: 'John',
    lastname: 'Doe',
    dob: '1990-05-15',
  },
  {
    userId: 2,
    firstname: 'Alice',
    lastname: 'Smith',
    dob: '1985-09-28',
  },
  {
    userId: 3,
    firstname: 'Bob',
    lastname: 'Johnson',
    dob: '1995-03-10',
  },
  ]
  return {
    users,
  }
})
