import { Client, Account, Databases,ID, Storage } from "appwrite";
import envConfig from "../envConfig";

const client = new Client();

client.setEndpoint(envConfig.apiEndpoint).setProject(envConfig.projectId);

class AuthService {
  constructor() {
    this.account = new Account(client);
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      if (!user || !user.$id) {
        throw new Error("User not logged in");
      }
      return user;
    } catch (err) {
      if (err.code === 401) {
        return null;
      }
      throw err;
    }
  }
  async guestLogin() {
    try {
      const session = await this.account.createAnonymousSession();
      if (!session || !session.$id) {
        throw new Error("User not logged in");
      }
      return session;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async register({ fullName, email, password }) {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        fullName
      );
      if (!user) {
        throw new Error("User not created");
      }
      return;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async login({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      if (!session || !session.$id) {
        throw new Error("User not logged in");
      }
      return session;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSession("current");
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

const authService = new AuthService();

export default authService
