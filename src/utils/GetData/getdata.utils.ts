import axios from "axios";
export class getData {
  async projects() {
    const data = await axios.get("http://localhost:3000/api/projects");
    return data.data.projects;
  };
  async certificates() {
    const data = await axios.get("http://localhost:3000/api/certificates");
    return data.data.certificates;
  };
}