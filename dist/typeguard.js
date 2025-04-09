"use strict";
const favHobbies = (hobby) => {
    if (Array.isArray(hobby)) {
        hobby.map((item) => {
            console.log(item);
        });
    }
    else {
        console.log(hobby);
    }
};
favHobbies("cricket");
