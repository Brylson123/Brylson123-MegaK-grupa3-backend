import { AuthLoginDto } from "../../auth/dto/auth-login.dto";

export type AuthLoginRequest = AuthLoginDto;
export type ChangePwdResponse = {
    isSuccess: boolean,
    message?: string,
}
