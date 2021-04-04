// https://alexwohlbruck.github.io/cat-facts/
export const requestCatFacts = () =>
  fetch("https://cat-fact.herokuapp.com/facts/random?amount=5").then((r) => {
    if (!r.ok) throw new Error("HTTP status " + r.status);
    return r.json();
  });
