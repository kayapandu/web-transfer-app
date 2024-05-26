import ApiService from "./api";

const client = new ApiService({});
const authService = {};

authService.login = (payload) => client.post('/login', payload);
authService.register = (payload) => client.post('/register', payload);

export default authService;