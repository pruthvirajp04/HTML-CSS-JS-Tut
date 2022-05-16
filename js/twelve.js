
        // Let's first make a object 
        let jsonObj = {
            name  : "Pruthviraj",
            chestNo : "4",
            chestAfterRec : "11 + ",
            favColor : "Blue",
            hobbies : "Swimming, driving , coding, playing chess, Yoga, Teaching , Working in Farms"
        }
        console.log(jsonObj);
        let someStr = JSON.stringify(jsonObj);
        console.log(someStr);
        someStr = someStr.replace('Teaching','Freelancing');
        let newJsonObj = JSON.parse(someStr);
        console.log(newJsonObj);
        let finalObj = JSON.stringify(newJsonObj);
        console.log(finalObj);
    