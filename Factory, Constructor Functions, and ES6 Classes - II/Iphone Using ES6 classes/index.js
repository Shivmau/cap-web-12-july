class Iphone {
  constructor(ASIN, color, display, camera, bluetooth) {
    this.ASIN = ASIN;
    this.color = color;
    this.display = display;
    this.camera = camera;
    this.bluetooth = bluetooth;
  }

  dial() {
    return "tring.. tring..";
  }

  sendMessagee() {
    return "Sending Message";
  }

  cameraClick() {
    return "Camera Clicked";
  }

  connectBluetooth() {
    return "Bluetooth connected successfully";
  }


  
}

let a=new Iphone(4546,"White",7.6,"40mp",5.0)
console.log(a)

let dial=a.dial();
console.log(dial)

let sms=a.sendMessagee();
console.log(sms)

let cmclk=a.cameraClick();
console.log(cmclk)

let cntblth=a.connectBluetooth();
console.log(cntblth)
