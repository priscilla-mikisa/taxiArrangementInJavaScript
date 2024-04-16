// write a program that arranges taxis in how they are supposed to move in and out.
//      PSEUDO CODE
// input the taxi plate, the number and the type .
// arrange the taxis according to their registration number.
// output a list if the arrangement of the taxis according to their order of registration.
function organisation(arr){
                  return (arr.sort((x,y)=>x.registrationNum-y.registrationNum))
   }
   console.log(organisation([{taxi:"car1",registrationNum:20 ,taxiPlate:"2903AD"},
   {taxi:"car2", registrationNum:329,taxiPlate:"3974386AD"},
   {taxi:"car3",registrationNum:9,taxiPlate:"62749264AD"}]));