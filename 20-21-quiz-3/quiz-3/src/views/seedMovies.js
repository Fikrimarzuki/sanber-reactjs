const sanberAPI = require("../config/sanberAPI");

const movieSeeders = [
  {
    title: "Avengers Infinity War",
    description: "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sequel to The Avengers (2012) and Avengers: Age of Ultron (2015), and the 19th film in the Marvel Cinematic Universe (MCU). The film was directed by Anthony and Joe Russo, written by Christopher Markus and Stephen McFeely, and features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Benedict Cumberbatch, Don Cheadle, Tom Holland, Chadwick Boseman, Paul Bettany, Elizabeth Olsen, Anthony Mackie, Sebastian Stan, Danai Gurira, Letitia Wright, Dave Bautista, Zoe Saldana, Josh Brolin, and Chris Pratt. In the film, the Avengers and the Guardians of the Galaxy attempt to prevent Thanos from collecting the six all-powerful Infinity Stones as part of his quest to kill half of all life in the universe.",
    year: 2020,
    duration: 160,
    genre: "Action/Sci-fi",
    rating: 10,
    image_url: "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg"
  },
  {
    title: "Avengers End Game",
    description: "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the direct sequel to Avengers: Infinity War (2018) and the 22nd film in the Marvel Cinematic Universe (MCU). The film was directed by Anthony and Joe Russo and written by Christopher Markus and Stephen McFeely, and features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don Cheadle, Paul Rudd, Brie Larson, Karen Gillan, Danai Gurira, Benedict Wong, Jon Favreau, Bradley Cooper, Gwyneth Paltrow, and Josh Brolin. In the film, the surviving members of the Avengers and their allies attempt to reverse the damage caused by Thanos in Infinity War.",
    year: 2019,
    duration: 181,
    genre: "Action/Sci-fi",
    rating: 8,
    image_url: "https://img01.mgo-images.com/image/thumbnail/v2/content/MMVAF76018A477C2826A4EC8747C40B7BE27.jpeg"
  },
  {
    title: "Urin Man",
    description: "Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the first film in the Marvel Cinematic Universe. It was directed by Jon Favreau from a screenplay by the writing teams of Mark Fergus and Hawk Ostby, and Art Marcum and Matt Holloway, and stars Robert Downey Jr. as Tony Stark / Iron Man alongside Terrence Howard, Jeff Bridges, Shaun Toub, and Gwyneth Paltrow. In the film, following his escape from captivity by a terrorist group, world famous industrialist and master engineer Tony Stark builds a mechanized suit of armor and becomes the superhero Iron Man.",
    year: 2008,
    duration: 126,
    genre: "Action/Sci-fi",
    rating: 9,
    image_url: "https://upload.wikimedia.org/wikipedia/en/0/00/Iron_Man_poster.jpg"
  },
  {
    title: "1917",
    description: "1917 is a 2019 British war film directed and produced by Sam Mendes, and written by Mendes and Krysty Wilson-Cairns. The film stars George MacKay and Dean-Charles Chapman, with Mark Strong, Andrew Scott, Richard Madden, Claire Duburcq, Colin Firth and Benedict Cumberbatch in supporting roles. It is partially inspired by stories told to Mendes by his paternal grandfather, Alfred Mendes, about his time serving in World War I.[6] Taking place soon after the German retreat to the Hindenburg Line during Operation Alberich, the film follows two young British soldiers who are ordered to deliver a message calling off a doomed offensive attack. This message is especially important to one of the soldiers because his brother will be part of the attack.",
    year: 2019,
    duration: 119,
    genre: "Action/War",
    rating: 8,
    image_url: "https://upload.wikimedia.org/wikipedia/id/a/ae/1917_film_poster.jpg"
  },
  {
    title: "The Mist",
    description: "The Mist (also known as Stephen King's The Mist) is a 2007 American science fiction horror film based on the 1980 novella The Mist by Stephen King. The film was written and directed by Frank Darabont. Darabont had been interested in adapting The Mist for the big screen since the 1980s. The film features an ensemble cast including Thomas Jane, Marcia Gay Harden, Nathan Gamble, Andre Braugher, Toby Jones, Frances Sternhagen, Buck Taylor, William Sadler, Sam Witwer, Alexa Davalos, Chris Owen, Andy Stahl, and future The Walking Dead actors Laurie Holden, Jeffrey DeMunn, Melissa McBride, and Juan Gabriel Pareja.",
    year: 1998,
    duration: 126,
    genre: "Horro/Sci-fi",
    rating: 8,
    image_url: "https://m.media-amazon.com/images/M/MV5BMzE3MDk0ODkwM15BMl5BanBnXkFtZTgwMzA5NTk5MTI@._V1_.jpg"
  },
  {
    title: "Digimon Last Evolution",
    description: "Digimon Adventure: Last Evolution – Kizuna (Japanese: デジモンアドベンチャー Last Evolution 絆, Hepburn: Dejimon Adobenchā Last Evolution Kizuna) is a Japanese anime adventure film produced by Toei Animation and animated by Yumeta Company.[3] The film was released in Japanese theaters on February 21, 2020.[4] Set in the same continuity of the first two Digimon television anime series, the film serves as the finale to the original Digimon Adventure story.",
    year: 2020,
    duration: 94,
    genre: "Anime/Sci-fi",
    rating: 7,
    image_url: "https://www.mainmain.id/uploads/post/2020/01/23/digimon.png"
  }
]

const seedMovies = async () => {
  await movieSeeders.map(async el => {
    console.log(el);
    await sanberAPI.post("/movies", el);
  })
}

module.exports = seedMovies;