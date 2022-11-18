//------creating object-------
let myVessel ={
    name: "Odertal",
    port: "Odesa"
  }
  console.log(myVessel)
  //-------Accesing by dot and by bracket
  
  console.log(myVessel.name)
  console.log(myVessel["port"])
  
  //-----Property Assignment---------
  myVessel.port ="Odesa/Mariupol"
  myVessel.year = 2017
  console.log(myVessel)
  //-----Methods------------
  let herPhrase ={
    sheSaid() {
      console.log("well, Hello sailor")
    }
  }
  
  //-----Nested Objects-------
  
  const vesselCrew = {
    deckDepartment:{
      captain:{
        name:"Dolphin",
        phrase:"iii",
      },
     ChOfficer:{
        name:"Whale",
        phrase:"wuuu",
      },
      secOfficer:{
        name:"Shark",
        phrase:"HaHa",
      }
    },
    engineDepartment:{
      chEngineer:{
        name:"Spanner",
        phrase:"fuck",
      }
    }
  }
  
  console.log(vesselCrew.deckDepartment.captain.name)
  
  //--------PassbyReference-----
  const myName ={
    firstName:"James",
    lastName:"Bond"
  }
  
  console.log(myName)
  
  const changeName =(myName) =>{
    myName.firstName = "Batman"
    return myName
  };
  changeName(myName);
  console.log(myName)
  
  //----------Looping through object for...in-----------------
  
  for( let crewMember in vesselCrew.deckDepartment){
    console.log(`${crewMember}: ${vesselCrew.deckDepartment[crewMember].name}`);
  }
  //----ADVANCED OBJECTS-----------------------
  
  //------this---------------------------
  
  let myJob = {
    one : "interesting",
    two : " not interesting",
    iChoose(){
      console.log("I say " + `${myJob.one}`)
    },
  but(){
    console.log(this.one)//this....
  }
  }
  myJob.but()
  //--------Getter----GETTER-------------------
  const myFullName = {
    _firstName: "Spider",
    _middleName: "Man",
    _lastName: "J",
    get fulName(){
  if(this._firstName && this._middleName && this._lastName){
    return `${this._firstName} ${this._middleName} ${this._lastName}`;
  }else{ 
    return "WTF???";
    }
    }
  }
  console.log(myFullName.fulName);
  //----------SETTER---SETTER-------------------
  
  let shipsName = {
    _callSign: "777",
    set callSign(newCallSign){
      if(typeof newCallSign === "number"){
        this._callSign = newCallSign;    
      }else{
        console.log("WTF???");
      }
    }
  }
  console.log(shipsName._callSign);
  shipsName._callSign = 40;// no parentases
  console.log(shipsName._callSign);
  // Factory Function--------------------------
  const vessel = (name, callSign, type, yearOfBuild, DWT) => {
    return {
      name: name,
      callSign: callSign,
      type: type,
      yearOfBuild: yearOfBuild,
      DWT: DWT + " mt"
    }
  };
  
  const lastVessel = vessel("Freedom","hello 777", "best type", 1991, 5000);
  console.log(lastVessel)
  
  //------------------Destructuring-------------
  
  const saySomething = (word1,word2) => {
    return{
      word1,
      word2
    };
  }
  console.log(saySomething("hi","there"))
  
  //Destructed assignment----------------------
  const { one } = myJob;
  console.log(one);
  
  
  
  
  