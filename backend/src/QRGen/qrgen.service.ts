import { Injectable, NotFoundException } from "@nestjs/common";
import QRCode from 'qrcode'
import { text } from "stream/consumers";

@Injectable() 
export class qrCodeService {
    

getQRcode () {
   
    const generate = () => {
        console.log(QRCode.toDataURL("http://localhost:3001/movies"))
    }

  }
  private generateQR = async text => {
  const qr = QRCode.toDataURL(text)
  if (!text) {
    throw new NotFoundException("could find product.")
  }
  return qr
    // try {
    //   console.log(await QRCode.toDataURL(text))
    // } catch (err) {
    //   console.error(err)
    // }
  }
}