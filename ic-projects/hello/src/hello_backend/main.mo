import Time "mo:base/Time";

persistent actor {

  var principalAmount : Float = 1000.0;
  var interestRate : Float = 0.05;
  var lastUpdatedTime : Int = Time.now();

  func floatPower(base : Float, exponent : Nat) : Float {
    var result : Float = 1.0;
    var counter : Nat = 0;
    while (counter < exponent) {
      result := result * base;
      counter := counter + 1;
    };
    return result;
  };

  public query func getBalance() : async Float {
    return principalAmount;
  };

  public query func getLastUpdated() : async Int {
    return lastUpdatedTime;
  };

  public func calculateCompoundInterest(years : Nat) : async Float {
    let compoundedValue = principalAmount * floatPower(1.0 + interestRate, years);
    principalAmount := compoundedValue;
    lastUpdatedTime := Time.now();
    return principalAmount;
  };

};
