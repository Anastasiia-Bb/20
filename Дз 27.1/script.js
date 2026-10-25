const watchlist = [
  "Inception",
  "Interstellar",
  "The Matrix",
  "Gladiator",
  "Dune"
];

const weekendFilms = watchlist
    .slice()
    .sort()
    .slice(0, 3);

console.log(weekendFilms);

weekendFilms.push("Oppenheimer", "Arrival");

console.log(
    weekendFilms
        .slice()
        .sort()
        .map((film, index) => '${index + 1}. ${film}')
        .join("\n")
);

console.log(watchlist);