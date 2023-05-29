import httpConfig from "../../utils/http-common";

class ParentService {
  addParent(name: string, email: string, password: string) {
    return httpConfig.post(`/parents`, {
      name: name,
      email: email,
      password: password,
    });
  }
  login(email: string, password: string) {
    return httpConfig.post(`/auth/login`, {
      email: email,
      password: password,
    });
  }
  getUserData() {
    return httpConfig.get(`/auth/userData`);
  }
}
export default new ParentService();
