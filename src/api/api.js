import axios from "axios";

export const API_URL = "http://185.183.182.157:5003/api";

function set_tokens(payload) {
  localStorage.setItem("access_token", payload.access_token);
  localStorage.setItem("refresh_token", payload.refresh_token);
}

export function refresh(path, method, body) {
  return axios({
    url: API_URL + "/auth",
    method: "PUT",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("refresh_token"),
    },
  })
    .then((data) => {
      set_tokens(data.data.obj);
      return request(path, method, body);
    })
    .catch((err) => {
      if (err.response.status === 422 || err.response.status === 401) {
        if (localStorage.getItem("refresh_token")) {
          localStorage.clear();
          document.location.replace("/login");
        }
        return err;
      }
    });
}

export function request(path, method, body) {
  return axios({
    url: API_URL + path,
    method: method,
    data: body || {},
    headers: {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
  })
    .then((data) => data.data)
    .catch((err) => {
      if (err.response.status == 401 || err.response.status == 422)
        return refresh(path, method, body);
      return err.response.data;
    });
}
export const sendEmail = (id, email) => {
  if (id.toString().length > 0 && email.length > 0) {
    request("/email", "post", {
      ticket_id: id,
      address: email,
    }).then((response) => {
      request(
        `/email/send_ticket_code_by_email_id/${response.obj.id}`,
        "get"
      ).then((res) => console.log(res));
    });
  }
};
export const creatDevice = (code) => {
  console.log(code, typeof +localStorage.getItem("id"));
  request("/device", "post", {
    code: code,
    owner_id: +localStorage.getItem("id"),
  })
    .then((response) => {
      return response;
    })
    .catch((e) => {
      console.log(e);
    });
};
