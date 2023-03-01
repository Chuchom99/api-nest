import { Injectable } from "@nestjs/common";
import QRCode from 'qrcode';

@Injectable() 
export class moviesServive {
    data = [
        {
            id: "001",
            title: "God Father",
            rank: "1",
            img: "https://res.cloudinary.com/chuchom/image/upload/v1676115224/movies/download_4_jqss4k.jpg"
        },
        {
            id: "002",
            title: "3 idiots",
            rank: "2",
            img: "https://res.cloudinary.com/chuchom/image/upload/v1676115225/movies/download_5_nvrgoq.jpg"
        },
        {
            id: "003",
            title: "Baby Police",
            rank: "3",
            img: "https://res.cloudinary.com/chuchom/image/upload/v1676115224/movies/download_6_ro98ue.jpg"
        },
        {
            id: "004",
            title: "American Gangster",
            rank: "4",
            img: "https://res.cloudinary.com/chuchom/image/upload/v1676115224/movies/download_7_wbyv9h.jpg"
        },
        {
            id: "005",
            title: "Da Vinci Demon",
            rank: "5",
            img: "https://res.cloudinary.com/chuchom/image/upload/v1676115224/movies/download_7_wbyv9h.jpg"
        },
        {
            id: "006",
            title: "Braveheart",
            rank: "6",
            img: "https://res.cloudinary.com/chuchom/image/upload/v1676115224/movies/download_9_zly3tr.jpg"
        },
        {
            id: "007",
            title: "300",
            rank: "7",
            img: "https://res.cloudinary.com/chuchom/image/upload/v1676115223/movies/download_10_teom4d.jpg"
        },
        {
            id: "008",
            title: "Power",
            rank: "8",
            img: "https://res.cloudinary.com/chuchom/image/upload/v1676115222/movies/download_11_gdvfux.jpg"
        },
        {
            id: "009",
            title: "Shanty Town",
            rank: "9",
            img: "https://res.cloudinary.com/chuchom/image/upload/v1676115221/movies/download_12_pnrmw4.jpg"
        },
        {
            id: "010",
            title: "Troy",
            rank: "10",
            img: "https://res.cloudinary.com/chuchom/image/upload/v1676115142/movies/download_3_afgmil.jpg"
        }
    
    ];
    
    getMovies() {
        return {...this.data}  
    }
   
    
}