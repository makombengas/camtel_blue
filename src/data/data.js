import { agenceImageData, allImagesDate, solutionImagesDate } from "./dataImage/dataImage"

export const navData = [

    {
        id:1,
        name: "ACCUEIL",
        link:"/",
    },
    {
        id:2,
        name: "A PROPOS",
        link:"a-propos",
    },
    {
        id:3,
        name: "SERVICES",
        link:"services",
    },
    {
        id:4,
        name: "BLUE",
        link:"blue",
    },
    {
        id:5,
        name: "NOS AGENCES",
        link:"nos-agences",
    },
    {
        id:6,
        name: "CONTACT",
        link:"contact",
    }

]

export const CarouselData =[
    {
        id:1,
        image: allImagesDate.blueOne
    },
    {
        id:2,
        image: allImagesDate.blueTwo
    }
]
export const flagsData ={
     
       france: allImagesDate.france,
      england: allImagesDate.england,
    }

export const blueHomeData =[
    {
        id:1,
        image: allImagesDate.blueOffreOne
    },
    {
        id:2,
        image: allImagesDate.blueOffreTwo
    },
    {
        id:3,
        image: allImagesDate.blueOffreThree
    },
    {
        id:4,
        image: allImagesDate.blueOffreFour
    },
    {
        id:5,
        image: allImagesDate.blueOffreFive
    },
    {
        id:6,
        image: allImagesDate.blueOffreSix
    }

];

export const solutionData=[
    {
        id:1,
        image:solutionImagesDate.blueHome,
        text:"blue Home", 
        link:"blue-Home", 
        data:[
            {
                id:1,
                text:"blue Home",  
                subText:"Be it for your home or your office, try Blue Home:High-speed, unlimited downloads, no installation required. Blue Home is available in very CAMTEL and Blue Shop at Yaounde and Douala #OnTueLeGame",
                info:"Info",
                subInfo:"Buy a WiFi modem now at F CFA 60 000, and get Blue Home L for free!",
                infoImage: [{image:solutionImagesDate.blueHomeOne}]

            }
        
        ]  
    },
    {
        id:2,
        image:solutionImagesDate.blueMobile,
        text:"Mobile blue",  
        link:"Mobile-blue", 
        data:[
            {
                id:1,
                text:"Mobile blue",  
                subText:"When your 4G data volume runs out, you continue to have unlimited access to your prefered apps, at reduced 3G speed, until your plan expires",
                info:"Info",
                subInfo:"Top up your mobile on  YUP, Switchn, or via #237*620# and activate your plan on  *825#",
                infoImage: [{image:solutionImagesDate.mobileBlueOne}]

            }
        
        ]  
    },
    {
        id:3,
        image:solutionImagesDate.switchOne,
        text:"Recharge ton numéro blue",
        link:"Recharge-ton-numéro-blue",   
        data:[
            {
                id:1,
                text:"Recharge ton numéro blue",  
                subText:"Recharge ton numéro Blue, quel que soit ton mode de paiement mobile! Télécharge YUP ou Switchn sur GooglePlay (pour utilisateurs iPhone, va sur http://switchn.net)! #OnTueLeGame",
                info:"",
                subInfo:"",
                infoImage: [{image:solutionImagesDate.switchNOne}, {image:solutionImagesDate.mobileBlueOne}]

            }
        
        ]  
    }
]

export const agenceData =[
    {
        id:1,
        name:"Agences Blue",
        city:"Littoral",
        image: agenceImageData.littoral,
        link:"littoral",
        coordination:{
            longitude:9.786072,
            latitude:4.061536,
        },
        cityData:[
            {
                id:1,
                name:"Agence Blue Littoral",
                city:"littoral",
                image: agenceImageData.littoral,
                cityName:["AKWA", "AKWA NORD", "BASSA", "BONABERI", "BEPANDA", "BONANJO", "BONAPRISO", "CITE DES PALMIERS", "DEIDO"  ],
                
            }
        ]
    },

    {
        id:2,
        name:"Agences Blue",
        city:"Centre",
        image: agenceImageData.centre,
        link:"centre",
        coordination:{
            longitude:11.501346,
            latitude:3.844119,
        },
        
        cityData:[
            {
                id:1,
                name:"Agence Blue Centre",
                city:"Centre",
                image: agenceImageData.centre,
                cityName:["ENTREPRISES (Face Camair)", "JAMOT (Dragage, Club CAMTEL)", "BOULEVARD", "BIYEM ASSI",  "NGOUSSO", "MENDONG", "MIMBOMAN", "NKOLBISSON", "MVAN"  ],
                
            }
        ]
    },

    {
        id:3,
        name:"Agence Blue",
        city:"Ouest",
        image: agenceImageData.ouest,
        link:"ouest",
        coordination:{
           
            longitude:10.25332,
            latitude:5.283333,
        },
        cityData:[
            {
                id:1,
                name:"Agence Blue Ouest",
                city:"Ouest",
                image: agenceImageData.ouest,
                cityName:["Bafoussam"],   
            }
        ]
    },

    {
        id:4,
        name:"Agence Blue",
        city:"Nord-Ouest",
        image: agenceImageData.nordOuest,
        link:"nord-ouest",
        coordination:{
            
            longitude:10.084549,
            latitude:5.573492,
        },
        cityData:[
            {
                id:1,
                name:"Agence Blue Ouest",
                city:"Nord-Ouest",
                image: agenceImageData.nordOuest,
                cityName:["BAMDENDA UP STATION"],
                
            }
        ]
    },

]

