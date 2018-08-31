var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  var record = collection.id;
  if(prop !== "tracks" && value !== ""){
    record[prop] = value;
    return collection;
  }else if(prop === "tracks" && value !== ""){
    if(record.tracks === false){
    record.push(tracks=[]);
    record[tracks] = value;
    return collection;
  }else if(value === ""){
    delete record[prop];
    return collection;
  }else{
    record[prop].push(value);
    return collection;
    }
  }
  }
// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");