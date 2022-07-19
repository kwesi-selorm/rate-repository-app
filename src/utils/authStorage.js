import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  async getAccessToken() {
    // Get the access token for the storage
    const accessTokenString = await AsyncStorage.getItem(
      `{this.namespace}:accessToken`
    );
    return JSON.parse(accessTokenString);
  }

  async setAccessToken(accessToken) {
    // Add the access token to the storage
    const accessTokenString = JSON.stringify(accessToken);
    await AsyncStorage.setItem("accessToken", accessTokenString);
  }

  async removeAccessToken() {
    // Remove the access token from the storage
    await AsyncStorage.removeItem(`{this.namespace}:accessToken`);
  }
}

export default AuthStorage;
