const getEmpDetailsById = async (talentId) => {
  let response;

  fetch(`/talent/get/${talentId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => {
      console.log(res);
      response = res;
    })
    .catch((err) => {
      console.error(err);
    });

  return response;
};

const getAllTalents = async () => {
  let response;

  fetch("/talent/getAll", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => {
      console.log(res);
      response = res;
    })
    .catch((err) => {
      console.error(err);
    });

  return response;
};

export { getEmpDetailsById, getAllTalents };
