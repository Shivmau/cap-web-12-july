
function Iphone3(ASIN,color,display,camera,bluetooth){

    this.ASIN=ASIN,
    this.color=color,
    this.display=display,
    this.camera=camera,
    this.bluetooth=bluetooth,


    this.dial=function(){
        return "tring... tring..."
    }

    this.sendMessage=function(){
        return "Sending Message..."
    }

    this.cameraClick=function(){
        return "Camera Clicked"
    }

    this.connectBluetooth=function(){
        return "Bluetooth Connected Successfully..."
    }


}


// let data1=new Iphone3(35454,"red",4.5,"45mp",6.0)
// console.log(data1)

let obj={}

Iphone3.call(obj,5657,"yellow",8.7,"50mp",5.0)
console.log(obj)
console.log(obj.dial())
console.log(obj.sendMessage())
console.log(obj.cameraClick())
console.log(obj.connectBluetooth())