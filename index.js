const farmAnimals = 'cow horse sheep pig chicken'
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
const k_muppet = {
  k_name: 'Kermit',
  k_color: 'green',
  k_album: {
    the_muppet_movie: {
      song_1: 'Rainbow Connection',
      song_2: 'Moving Right Along',
      song_3: 'Never Before, Never Again',
      song_4: 'I Hope That Something Better Comes Along',
    },
  },
  k_job: 'Host of The Muppet Show',
  k_partner: 'Miss Piggy'
};

const [moo, neigh, baa, oink, cluck] = farmAnimals.split(" ");

const [bessie, ,dolly, babe, little] = farmAnimals.split(" ");

const [blackAndWhite, ,black, pink,] = farmAnimals.split(" ");

const [red, orange, yellow, green, blue, indigo, violet] = colors;

const [r,o,y,g,b,,v] = colors;

const [,,,,,indg,] = colors;

const { muppetName, color, song, job, partner } = muppet; 

const song2 = k_muppet.k_album.the_muppet_movie.song_2;
const song4 = k_muppet.k_album.the_muppet_movie.song_4;
const nestedJob = k_muppet.k_job;
const nestedPartner = k_muppet.k_partner;