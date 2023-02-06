// Concept 

function First() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Esperou")
      resolve()
    }, 100)
  })
}

async function Second() {
  console.log("Iniciou");

  await First();

  console.log("Terminou")
}

Second();

// Example

function getUser(id) {
  return fetch(`https://reqres.in/api/users=?id=${id}`)
    .then(response => response.json())
    .catch((err) => console.log(err))
}

async function showUserName(id) {
  try {
    const user = await getUser(id);
    console.log(`O nome de usuário é:${user.data.name}`)
  } catch (err) {
    console.log(`Erro: ${err}`)
  }
}

showUserName(5)