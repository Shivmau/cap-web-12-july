
function iphone1(ASIN,color,display,camera){

    let obj={};

    obj.ASIN=ASIN;
    obj.color=color;
    obj.display=display;
    obj.camera=camera;

    obj.dial=function(){
        return "ring... ring..."
    }

    obj.sendingMessage=function(){
        return "Sending message..."
    }

    obj.cameraClick=function(){
        return "Camera Clicked"
    }


    return obj

}

    let phoneData=iphone1(1213,"red",5.6,"50mp")
    console.log(phoneData)
    console.log(phoneData.dial())
    console.log(phoneData.sendingMessage())
    console.log(phoneData.cameraClick())

