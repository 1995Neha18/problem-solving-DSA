// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     const userData = document.getElementById("user-data");
//     userData.innerHTML = "";

//     const userList = document.createElement("ul");

//     data.forEach((user) => {
//       const listItem = document.createElement("li");

//       const userId = document.createElement("p");
//       userId.textContent = `ID: ${user.id}`;
//       listItem.appendChild(userId);

//       const userName = document.createElement("p");
//       userName.textContent = `Name: ${user.name}`;
//       listItem.appendChild(userName);

//       userList.appendChild(listItem);
//     });
//     userData.appendChild(userList);

//     console.log(data);
//   })
//   .catch((error) => console.log(error));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const userDetails = document.getElementById("user-data");
    userDetails.innerHTML = "";

    const userList = document.createElement("ul");

    data.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = `ID: ${user.id}, Name: ${user.name}`;
      userList.append(listItem);
    });
    userDetails.append(userList);
  })
  .catch((error) => console.log(error));
