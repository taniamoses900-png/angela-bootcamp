persistent actor {

  // This variable stores the name inside the blockchain's memory
  var currentName : Text = "World";

  // This function reads the name and returns a customized greeting
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };

};
