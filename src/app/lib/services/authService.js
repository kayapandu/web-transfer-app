import ApiService from "./api";

const client = new ApiService({ baseURL: 'https://express-flip-846kq5f6h-kayapandus-projects.vercel.app' });
const authService = {};

authService.login = (payload) => client.post('/login', payload);
authService.register = (payload) => client.post('/register', payload);

export default authService;