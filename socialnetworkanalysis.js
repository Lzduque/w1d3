var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

//function to acess the property of each person
function goInsideFn(object,id,charac) {
  return(object[id][charac]);
}

// console.log(goInsideFn(data,"f06","age"));
// console.log(goInsideFn(data,"f06","follows"));
// console.log(goInsideFn(data,"f06","follows").length);

////

function whoFollowsMost(data) {
  var resultName = "";
  // console.log("result name: ",resultName);

  var resultNumOfFollows = 0;
  // console.log("result num of follows: ",resultNumOfFollows);

  for (var id in data) {
    if (goInsideFn(data,id,"follows").length > resultNumOfFollows) { // is going to compare to check if its true or not - is it larger or not?
      // console.log("is the new result larger then the actual one or what? ",goInsideFn(data,id,"follows").length > resultNumOfFollows);

      resultNumOfFollows = goInsideFn(data,id,"follows").length; //if the analised num is larger than the actual result, the result is now going to be this number!
      // console.log("the new winner is: ",resultNumOfFollows = goInsideFn(data,id,"follows").length); // is going to print the new value!

      // console.log("result num of follows:",resultNumOfFollows);
      // console.log("id of the actual winner: ", id);
      // console.log("num of follows inside the id:",goInsideFn(data,id,"follows").length);

      resultName = goInsideFn(data,id,"name");
      // console.log("the name of the winner: ",resultName = goInsideFn(data,id,"name"));
      // console.log("NAME", resultName, "NUM", resultNumOfFollows)
    }
  }
  return `${resultName} follows most people: ${resultNumOfFollows} in total!` // first access name then access follows
}

console.log(whoFollowsMost(data));



////



function hasMostFollowers(data) {
  var numOfFollowers = {
  }

  //how many times f03 appears??
  for (var id in data) {
    console.log("id beeing analized: ",id); // test - is it inside the right id?

    for (var charac in id) {
      // console.log("id beeing analized: ",id); // test - is it inside the right id?
      console.log("index of follower beeing analized: ",charac); //test - is it analizing the right charac - is going to return an index!
      console.log("id beeing analized: ",id); //test - is it analizing the right follower - is going to return an id!

      if ((numOfFollowers["f03"]) === undefined) {
        numOfFollowers["f03"] = 0;
      }

      if (charac == 2) {
        console.log(charac == 2);
        for (var ids in charac) {
          console.log("ids beeing analized: ",ids);
          console.log("follower beeing analized: ",charac);
          if (ids === "f03") {
            console.log("is id equal f03? ",ids === "f03"); // test - is it true?
            numOfFollowers["f03"] ++;
            console.log(numOfFollowers); // test - new number of followers
          }
          }
      };

      // console.log(numOfFollowers); // test - to see if the property is created!



      console.log("");
    }
  }
  return numOfFollowers;
}

console.log(hasMostFollowers(data));

////












// var personName = data["f01"]["name"];
// var personAge = data["f01"]["age"];
// var personFollows = data["f01"]["follows"];
// var personFollowsNum = data["f01"]["follows"].length;

// console.log(personName,personAge,personFollows,personFollowsNum)

// for (var x in data) {

// }

// console.log(x);

function mostFollows(data) {
  var mostFollow = {
    name: "",
    numOfFollows: 0
  };
  // create variable to store the resuklt in form of an object - can store both data - name and num of Follows!
  for (var x in data) {
    if (data[x]["follows"].length > mostFollow["numOfFollows"]) {
      mostFollow["name"] = data[x]["name"];
      mostFollow["numOfFollows"] = data[x]["follows"].length
    }
  }
  return mostFollow;
}

// console.log("Person who follows the most people", mostFollows(data))

////

function mostFollowers(data) {
  var mostFollowers = {}; // array with all the person and number of followers
// how many times f01 appears in each pearson follows
for (var x in data) {
  for (var i = 0 ; i < data[x]["follows"].length ; i++){
    // console.log(data[x]["follows"][i])
    var y = data[x]["follows"][i];
    if (mostFollowers[y] === undefined){
      mostFollowers[y] = 1;
    } else {
      mostFollowers[y] ++;
    }
  }
}
 var result = {};
 var largestNumOfFollowers = 0;
 for (var z in mostFollowers) {
  // console.log(mostFollowers[z]);
  if (mostFollowers[z] > largestNumOfFollowers) {
    largestNumOfFollowers = mostFollowers[z]
  }
  // console.log(largestNumOfFollowers);
}
//find the person or more then one that has the most followers
// console.log(mostFollowers);
var finalTally = {
  "people with the most folowers": []
}
for (var a in mostFollowers) {
  // console.log(mostFollowers[a]);
  if (mostFollowers[a] === largestNumOfFollowers) {
    // console.log(a);
    finalTally["people with the most folowers"].push(data[a]["name"])
    // console.log(finalTally);
  }
}
return finalTally;
}

// console.log(mostFollowers(data))

////
