import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from "@nestjs/common";
import { Request, Response } from "express";

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
	catch(exception: any, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<Response>();
		const request = ctx.getRequest<Request>();
		const status =
			exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
		console.error(exception?.message);
		console.error(exception);
		if (status === 500) {
			return response.json({
				isSuccess: false,
				message: "Ops... Proszę spróbować za kilka minut.",
			});
		} else {
			return response.json({
				isSuccess: false,
				message: exception.message,
			});
		}
	}
}
