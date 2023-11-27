import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { UserModule } from "./user/user.module";
import { StudentModule } from "./student/student.module";
import { HrModule } from "./hr/hr.module";

@Module({
	imports: [DatabaseModule, StudentModule, UserModule, HrModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
