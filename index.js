setInterval(() => {
    d=new Date();
    hTime=d.getHours();
    mTime=d.getMinutes();
    sTime=d.getSeconds();
    hRotation=hTime*30+mTime/2; // Minutes having influence on hours clock.
    mRotation=mTime*6;
    sRotation=sTime*6;
    document.querySelector("#hour").style.transform="rotate("+hRotation+"deg)";
    document.querySelector("#minutes").style.transform="rotate("+mRotation+"deg)";
    document.querySelector("#seconds").style.transform="rotate("+sRotation+"deg)";
   
},1000);