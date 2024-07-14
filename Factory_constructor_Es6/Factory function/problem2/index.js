
function iphone1(ASIN,color,display,camera,bluetooth){

    let obj={};

    obj.ASIN=ASIN;
    obj.color=color;
    obj.display=display;
    obj.camera=camera;
    obj.bluetooth=bluetooth;

    obj.dial=function(){
        return "tring... tring..."
    }

    obj.sendingMessage=function(){
        return "Sending message..."
    }

    obj.cameraClick=function(){
        return "Camera Clicked"
    }

    obj.connectbluetooth=function(){
        return "Bluetooth Connected"
    }


    return obj

}


let phoneDatainbluks=[
    {ASIN:4646,color:"red",display:7.6,camera:"56mp",bluetooth:4.0},
    {ASIN:5656,color:"yellow",display:7.6,camera:"56mp",bluetooth:4.0},
    {ASIN:7675,color:"red",display:4.6,camera:"66mp",bluetooth:4.0},
    {ASIN:2423,color:"red",display:7.6,camera:"56mp",bluetooth:4.0},
    {ASIN:5756,color:"black",display:7.6,camera:"36mp",bluetooth:4.0},
    {ASIN:6454,color:"brown",display:5.6,camera:"56mp",bluetooth:4.0},
    {ASIN:7856,color:"red",display:7.6,camera:"36mp",bluetooth:4.0},
    {ASIN:5465,color:"black",display:7.6,camera:"56mp",bluetooth:4.0},
    {ASIN:5656,color:"red",display:6.6,camera:"56mp",bluetooth:4.0},
    {ASIN:5656,color:"pink",display:7.6,camera:"56mp",bluetooth:4.0},
    {ASIN:7556,color:"green",display:8.6,camera:"16mp",bluetooth:4.0},
    {ASIN:8677,color:"red",display:9.6,camera:"56mp",bluetooth:4.0},


]
// console.log(phoneDatainbluks[0].ASIN)\

let length1=phoneDatainbluks.length;
for(let i=0; i<length1; i++){
    console.log(iphone1(phoneDatainbluks[i].ASIN,phoneDatainbluks[i].color,phoneDatainbluks[i].display,phoneDatainbluks[i].camera,phoneDatainbluks[i].bluetooth))
}
    



let phoneData=iphone1(1213,"red",5.6,"50mp",4.0)
    let phoneDat1=iphone1(34,"black","4.4inch","34mp",3.0)
    console.log(phoneData)
    console.log(phoneDat1)
    console.log(phoneData.dial())
    console.log(phoneData.sendingMessage())
    console.log(phoneData.cameraClick())
    console.log(phoneData.connectbluetooth())

