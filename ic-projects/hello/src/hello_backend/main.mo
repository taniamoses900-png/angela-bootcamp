persistent actor {

  var currentName : Text = "World";

  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };

  public func setName(newName : Text) : async () {
    if (newName != "") {
      currentName := newName;
    };
  };

}
