persistent actor {

  var currentName : Text = "World";
  var count : Nat = 0;

  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };

  public func setName(newName : Text) : async () {
    if (newName != "") {
      currentName := newName;
    };
  };

  public query func getCount() : async Nat {
    return count;
  };

  public func incrementCount() : async () {
    count := count + 1;
  };

}

