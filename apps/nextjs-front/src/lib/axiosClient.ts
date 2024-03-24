import axios, { AxiosResponse } from 'axios';
import { BACKEND_CONFIG } from './envConstant';

class ApiClient {
  private readonly axiosInstance;
  private readonly baseURL: string | undefined;
  constructor(baseURL: string | undefined) {
    this.baseURL = baseURL;
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  public async get<T = any>(path: string): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(path);
  }

  public async post<T = any>(
    path: string,
    data?: any,
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post<T>(path, data);
  }

  // Add other methods like put, delete, etc. as needed
  public async getBackendEnv() {
    return BACKEND_CONFIG.ENV;
  }
}

const apiClient = new ApiClient(BACKEND_CONFIG.BACKEND_URL);
export default apiClient;
