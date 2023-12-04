import { Body, Controller, Get, Param, Patch } from "@nestjs/common";
import { HrService } from "./hr.service";
import {
	ReservationStudentResponse,
	StudentInterface,
	StudentsToInterviewResponse,
	viewAllActiveStudentsResponse,
} from "../types";
import { StudentService } from "../student/student.service";
import { ActiveStudentsDto } from "../student/dto/active-studnets.dto";
import { UserObj } from "../decorators/user-obj.decorator";
import { UserEntity } from "../user/entity/user.entity";
import { ReservationStudentDto } from "../student/dto/reservation-student.dto";

@Controller("/hr")
export class HrController {
	constructor(
		private readonly hrService: HrService,
		private readonly studentService: StudentService,
	) {}

	@Get("/students")
	viewAllStudents(@Body() req: ActiveStudentsDto): Promise<viewAllActiveStudentsResponse> {
		return this.studentService.viewAllActiveStudents(req);
	}

	@Get("/students/interview")
	viewAllStudentsToInterview(
		@Body() req: ActiveStudentsDto,
		@UserObj() user: UserEntity,
	): Promise<StudentsToInterviewResponse> {
		return this.studentService.findAllToInterview(req, user);
	}
	@Get("/students/cv/:id")
	showStudentInfo(@Param("id") id: string): Promise<StudentInterface> {
		return this.studentService.findOne(id);
	}

	@Patch("/student/reservation")
	reservation(
		@Body() ReservationStudentDto: ReservationStudentDto,
		@UserObj() user: UserEntity,
	): Promise<ReservationStudentResponse> {
		return this.studentService.reservation(ReservationStudentDto, user);
	}
}
