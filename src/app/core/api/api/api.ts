export * from './auth.service';
import { AuthService } from './auth.service';
export * from './mOEX.service';
import { MOEXService } from './mOEX.service';
export * from './neuralNetwork.service';
import { NeuralNetworkService } from './neuralNetwork.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [AuthService, MOEXService, NeuralNetworkService, UserService];
