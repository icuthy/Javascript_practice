// Regex Failure - Bug Fixing #2

// Oh no, Timmy's received some hate mail recently but he knows better. Help timmy fix his regex filter so he can be awesome again!

function filterWords(phrase){
  return phrase.replace(/(bad|mean|ugly|horrible|hideous)/ig,'awesome');
}
