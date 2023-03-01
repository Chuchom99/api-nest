import { Module } from "@nestjs/common";

import { qrGenController } from "./qrgen.controller";
import { qrCodeService } from "./qrgen.service";

@Module({
    controllers: [qrGenController],
    providers: [qrCodeService]
})
export class qrCodeModule {};