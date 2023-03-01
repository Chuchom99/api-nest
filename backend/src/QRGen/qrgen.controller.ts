import { Controller, Get } from "@nestjs/common";
import { qrCodeService } from "./qrgen.service";

@Controller("qr") 
export class qrGenController {
    constructor (private readonly qrgen: qrCodeService) {}


    @Get()
    getQRGen() {
        return this.qrgen.getQRcode()
    }

}