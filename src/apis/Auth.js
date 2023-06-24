const login = async (reqBody) => {
  let response;

  await fetch("", {
    method: "POST",
  })
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      console.error(err);
    });

  return response;
};

export { login };
