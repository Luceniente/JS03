const myStorage = {
    car: {
    inside: {
    'glove box': 'maps',
    'passenger seat': 'crumbs',
    },
    outside: {
    trunk: 'jack',
    },
    },
   };
   function gloveBoxContents(){
  
    let  gloveBoxContents = myStorage.car.inside['glove box'];
     console.log (gloveBoxContents);
  ;
  }
  
      gloveBoxContents();