const getMyProjects = async (talentId) => {
  let response;

  fetch(`/project/getMyProject/${talentId}`, {
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

const getProjectDetails = async (projectId) => {
  let response;

  fetch(`/project/getMyProject/${projectId}`, {
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


export { getMyProjects, getProjectDetails };
