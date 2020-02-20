const mongoose = require('mongoose');
const User = require('../models/User.model');
const Chat = require('../models/Chat.model');
const Message = require('../models/Message.model');
const Comment = require('../models/Comment.model');
require('../configs/db.config');
// User.collection.drop();
// Chat.collection.drop();
// Message.collection.drop();
// Comment.collection.drop();

const users = [
  {
    path: 'https://ca.slack-edge.com/T02CQ4EN4-UNCE3P0EL-1f41629c62fc-512',
    username: 'adam',
    firstName: 'Adam',
    lastName: 'Maimon',
    email: 'am@gmail.com',
    password: '$2a$10$LdeJSVtKquiXJFsH4LYry.nitJLWXwlSSEwePlCU38wmlbDMcgAtq',
  },
  {
    path: 'https://ca.slack-edge.com/T02CQ4EN4-UP3316YP2-d1d03b2fc512-512',
    username: 'evgeny',
    firstName: 'Evgeny',
    lastName: 'Galitskiy',
    email: 'eg@gmail.com',
    password: '$2a$10$cBne2GrXta1ipTGcikZZWOZhsHmj0tLV8G6sn.Hlt1EpqoLpC6Hp2',
  },
  {
    username: 'ashraf',
    firstName: 'Ashrafzhon',
    lastName: 'Kurbonaliev',
    email: 'alforsii@gmail.com',
    password: '$2a$10$XHvjKPJdm4H6p3YVvqXiGe32fCXwCZuzZNYYpXlHjotyXeXmWe/1W',
    path:
      'http://res.cloudinary.com/dml50vwsd/image/upload/v1581608885/users/IMG_2612.JPG.jpg',
  },
  {
    path: 'https://ca.slack-edge.com/T02CQ4EN4-ULH9QEHDF-514133710ead-512',
    username: 'kevin',
    firstName: 'Kevin',
    lastName: 'Medina',
    email: 'km@gmail.com',
    password: '$2a$10$K2PAOtPaoHzMmE7ZDrZIceYsCH1Ek1ROU7EOOpXfE756b1PmjnNLC',
  },
  {
    path: 'https://ca.slack-edge.com/T02CQ4EN4-UN6RGB6SW-8518d344ae90-512',
    username: 'delvis',
    firstName: 'Delvis',
    lastName: ' E Apud',
    email: 'dep@gmail.com',
    password: '$2a$10$wxuPxUUOL2NYhEoFlZnu5ucn2jFlr3k2LiXheMV/cJQrbkgrXUyvK',
  },
  {
    path: 'https://ca.slack-edge.com/T02CQ4EN4-UL3A3BH3J-e4015450d5bf-512',
    username: 'erick',
    firstName: 'Erick',
    lastName: 'Sicard',
    email: 'es@gmail.com',
    password: '$2a$10$FW9zSG4NFxgjDvRflBHVQeUOwKUtYUG6uavDDennz1OgmXWh4wyz.',
  },
  {
    path: 'https://ca.slack-edge.com/T02CQ4EN4-UMKHVBR52-d1b451887388-512',
    username: 'gustavo',
    firstName: 'Gustavo',
    lastName: 'Jordão',
    email: 'gj@gmail.com',
    password: '$2a$10$jsXqBaPesF0llJlDmulux.sLopoMjY0oH3nv7luQLSX0Y2k51hR3C',
  },
  {
    path: 'https://ca.slack-edge.com/T02CQ4EN4-UPE3Z3HGX-a1c795d9b524-512',
    username: 'humberto',
    firstName: 'Humberto',
    lastName: 'Buniotto',
    email: 'hb@gmail.com',
    password: '$2a$10$tWc4BfsLHczmSvqQ5yP5XeUn3kGGf07g0Z6kztfXi/2f2aOB7GAmS',
  },
  {
    path: 'https://ca.slack-edge.com/T02CQ4EN4-UP444HG0Z-fc75e4bfdea7-512',
    username: 'jerlissa',
    firstName: 'Jerlissa',
    lastName: 'Rivas',
    email: 'jr@gmail.com',
    password: '$2a$10$N0wzGxVH3wi3WkGpmHL3QeBgLcmYzQZFrscShodymrInt4Ul/D2pS',
  },
  {
    path: 'https://ca.slack-edge.com/T02CQ4EN4-UL9TD3151-37de1763345c-512',
    username: 'jose',
    firstName: 'Jose',
    lastName: 'Pereira',
    email: 'jp@gmail.com',
    password: '$2a$10$5JA7S94kUhP77EioBEsaPedNxNB0EuRRzk00rg5sHPIxHMeZnTLVW',
  },
  {
    path: 'https://ca.slack-edge.com/T02CQ4EN4-ULDSEKW64-8d48b6952645-512',
    username: 'kayla',
    firstName: 'Kayla',
    lastName: 'Martinez',
    email: 'km@gmail.com',
    password: '$2a$10$SxHKuJxpSblnQEsZor6M0uKmFUU8hCQuRc/F69WsivgahdZ/t.tb6',
  },
  {
    path: 'https://ca.slack-edge.com/T02CQ4EN4-UMBL0HSV6-1dab1234d618-512',
    username: 'melany',
    firstName: 'Melany',
    lastName: 'Valdiviezo',
    email: 'mv@gmail.com',
    password: '$2a$10$pJ9XBz5rqs6uBPWf7KOQ2ebWqiMP80LhLyW9yB0w3Z7EJJofrI/32',
  },
  {
    path: 'https://ca.slack-edge.com/T02CQ4EN4-UP4G651A8-2eb046799955-512',
    username: 'michaela',
    firstName: 'Michaela',
    lastName: 'DeCamara',
    email: 'md@gmail.com',
    password: '$2a$10$oicNBp3dI2Slusl2gGliKOAqw85iaknLJpyG/joUWaNdN6.Zl8D42',
  },
  {
    path: 'https://ca.slack-edge.com/T02CQ4EN4-U7GGM8JRM-6434bb9a254e-512',
    username: 'marcos',
    firstName: 'Marcos ',
    lastName: 'A Palacios',
    email: 'mp@gmail.com',
    password: '$2a$10$FcvWP0lactfdtCltvTfKEuRz6LQwogySTmcSrN9vBCwsp/AO.BFn6',
  },
  {
    path: 'https://ca.slack-edge.com/T02CQ4EN4-UNY9H2JPM-89211449f3b6-512',
    username: 'delio',
    firstName: 'Delio',
    lastName: 'Morato',
    email: 'dm@gmail.com',
    password: '$2a$10$cqNUdZPpAsTzI0kN5hSWLOOhSSey6edZyxo6FrFmMgieyVZDDiHaq',
  },
  {
    path: 'https://ca.slack-edge.com/T02CQ4EN4-U0YEGPH4Z-ff94dd744833-512',
    username: 'brito',
    firstName: 'Daniel',
    lastName: 'Brito',
    email: 'db@gmail.com',
    password: '$2a$10$Jcf9SJas6IBfMXJP10jraOxQruwxExn2dIqHVOUHtIpGGz5yRNA3i',
  },
  {
    path: 'https://ca.slack-edge.com/T02CQ4EN4-U3TFNTZDJ-5b0e1506346a-512',
    username: 'sandrabosk',
    firstName: 'Aleksandra',
    lastName: 'Bošković',
    email: 'ab@gmail.com',
    password: '$2a$10$tY/f8zti0Y1S/3NRX6sb6etcVjJ6qNU7GCmNdVKNWqzjBmTGx/o5.',
  },
  {
    path: 'https://ca.slack-edge.com/T02CQ4EN4-ULPBT934N-34aec0f37306-512',
    username: 'michel',
    firstName: 'Michel',
    lastName: 'Maia',
    email: 'mm@gmail.com',
    password: '$2a$10$PG2IghBdwRDU3gOYSPqnVebAVHZw1fw6oXnOFmXTdLtSE506thqbK',
  },
  {
    path: 'https://ca.slack-edge.com/T02CQ4EN4-U0GMWHJHF-0d658c16cd1a-512',
    username: 'nickborbe',
    firstName: 'Nicolas',
    lastName: 'Borbe',
    email: 'nb@gmail.com',
    password: '$2a$10$Hfz.l9XO14U9IrvZAsGNIeCOiOTikeylihnEjCkv0LpR6j2UCGo7q',
  },
  {
    path: 'https://ca.slack-edge.com/T02CQ4EN4-UNYN10734-4f347f1b29ae-512',
    username: 'stanley',
    firstName: 'Stanley',
    lastName: 'Fils',
    email: 'sf@gmail.com',
    password: '$2a$10$iThZUjrfMwpuvMboWwNLwek1O0u/qGYEgTUe5gQJ7NCqmgVxhe48O',
  },
  {
    path: '/images/default-img.png',
    username: 'stefan',
    firstName: 'Stefan',
    lastName: 'Culafic',
    email: 'sc@gmail.com',
    password: '$2a$10$H6oIyCgyWIb2OXmoFVFz8.C6dLI7jrcgdnJmJ7ynVhp0S/5iFxHsi',
  },
  {
    path: 'https://ca.slack-edge.com/T02CQ4EN4-ULWDPLMQB-67ac8baa19a8-512',
    username: 'veronica',
    firstName: 'Veronica',
    lastName: 'Veronica',
    email: 'vv@gmail.com',
    password: '$2a$10$LkVZpEOL5zais4.uX4LL9OnotG0.hymbjLk6mto99D/H/cQd9z57a',
  },
  {
    path: 'https://ca.slack-edge.com/T02CQ4EN4-U7C5G8A75-6b4b83e4fe34-512',
    username: 'jessica',
    firstName: 'Jessica',
    lastName: 'Gonzalez',
    email: 'jg@gmail.com',
    password: '$2a$10$OCSn4DGzFFeFg7w4qvRX..j3A9fbVCauuylCswpAYQyqj7jNhjl7S',
  },
  {
    path: 'https://ca.slack-edge.com/T02CQ4EN4-UL2TEB2E8-d9ce4f72f99b-512',
    username: 'carlos',
    firstName: 'Carlos',
    lastName: 'Osorio',
    email: 'co@gmail.com',
    password: '$2a$10$2NhwU0ElSAlRsZxojtBuD.c4SLvSnJryLX/RshcxipIJzgCjmrdW.',
  },
];

//create users
User.create(users)
  .then(savedUsersDB => {
    console.log(`Users are created`);
  })
  .catch(err => console.log(`Error while creating new users ${err}`));
