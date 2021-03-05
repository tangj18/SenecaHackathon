const demoData = {
    "9021994b-89f3-4abe-900d-82bccd9a95fa":{
        userId: "A1B2C3",
        name: "Joshua Ng",
        address: "some location",
        phoneNum: "999 222 7777",
        CovidTest: "Date: December 1, 2020",
        CovidResult: "Negative",
        Vaccinations: "Type: Moderna",
        VacDate: "Date: February 25, 2021"
    },
    "a2f9f0b3-c114-47b0-ba3e-8215c3ce07eb":{
        userId: "Y6J2D8",
        name: "Jamie Tang",
        address: "Big House",
        phoneNum: "111 222 3333",
        CovidTest: "Date: January 7, 2021",
        CovidResult: "Negative",
        Vaccinations: "Type: Astrazeneca",
        VacDate: "Date: January 20, 2021"
    }
}
const demoAuthData = { 
    "Jngqwerty":{
        pass:"aaa",
        id: "9021994b-89f3-4abe-900d-82bccd9a95fa"
    },
    "Jtangqwerty" :{
        pass:"temp",
        id:"a2f9f0b3-c114-47b0-ba3e-8215c3ce07eb"
    }
}


export const compareValues = (user, pass) =>{
    if(demoAuthData[user] && demoAuthData[user].pass === pass){
        return demoData[demoAuthData[user].id];
    }
    return null;
}
