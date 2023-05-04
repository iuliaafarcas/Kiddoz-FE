import httpConfig from "../http-common";

class ParentService {
  addParent(name: string, email: string, password: string) {
    return httpConfig.post(`/parents`, {
      name: name,
      email: email,
      password: password,
    });
  }
}
export default new ParentService();
