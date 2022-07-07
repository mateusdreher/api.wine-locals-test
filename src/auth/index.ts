import { AuthController } from "./auth.controller";
import { AuthRepository } from "./repository/auth.repository";
import { AuthUseCase } from "./use-case/auth.use-case";

const authRepository = new AuthRepository();
const authUseCase = new AuthUseCase(authRepository);

const authController = new AuthController(authUseCase);

export { authController };