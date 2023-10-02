export async function validateToken() {
  const response = await fetch(
    "https://habithub-api.herokuapp.com/auth/validate",
    {
      //API base url should be stored somewhere for the whole site
      method: "GET",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
        Authorization: "BEARER " + localStorage.getItem("jwt"),
      },
    }
  );

  //NOTE - should put in another check here which ensures jwt data (e.g. u_id) matches existing user data
  if (!response.ok) {
    signout();
    return false;
  }
  return true;
}

export function signout() {
  localStorage.clear();
}

export function redirectToLocation(location) {
  window.location.href = location;
}

export async function loadUserData(id, token) {
  const fetchURL = "https://habithub-api.herokuapp.com/user/" + id;

  const response = await fetch(fetchURL, {
    method: "GET",
    headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
      Authorization: "BEARER " + token,
    },
  });

  const data = await response.json();
  return data;
}

export async function loadUserPic(id, token) {
  var fetchURL = "https://habithub-api.herokuapp.com/pic/" + id;
  const response = await fetch(fetchURL, {
    method: "GET",
    headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
      Authorization: "BEARER " + token,
    },
  });

  const data = await response.json();
  return data;
}
