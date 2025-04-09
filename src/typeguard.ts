const favHobbies: (hobby: string | string[]) => void = (hobby: string | string[]) => {
      if (Array.isArray(hobby)) {
          hobby.map((item: string): void => {
              console.log(item);
          });
      } else {
          console.log(hobby);
      }
  };
  
  favHobbies("cricket");
    