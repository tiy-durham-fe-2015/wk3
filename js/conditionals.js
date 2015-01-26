
var age = 20;
var haventHadCheckupIn5Years = true;

// The && means and also. The statement on the left
// and the statement on the right must both be true
// in order for this condition to be true
//
// Here, if someone is 30+ years old and is also
// less than 40 years old, they are in their thirties.
if (age >= 30 && age < 40) {
  alert("You are in your thirties");
}

// The || means or else, and only one side of the
// or statement needs to be true in order for the
// condition to be true.
//
// Here, if someone is 40+ years old or if they haven't had
// a checkup in 5 years, if either of these is true,
// the if condition is true.
if (age >= 40 || haventHadCheckupIn5Years) {
  alert("Better get checked");
}

// Grouping applies to conditionals just like it applied
// to math.
//
// Here, we are saying, if age is in the 40s or haven't had
// a checkup in 5 years, if either is true, then we will alert
// "Better get checked"
if ((age >= 40 && age < 50) || haventHadCheckupIn5Years) {
  alert("Better get checked");
}
