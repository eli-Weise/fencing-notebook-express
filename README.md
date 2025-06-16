to run: node --watch app.js

to reset bouts table and populate it:
  `psql`
  `\c fencers`
  `DROP TABLE bouts`
  exit psql
  `node db/populateBouts.js`

to reset fencer table and populate it:
  `psql`
  `\c fencers`
  `DROP TABLE bouts`
  exit psql
  `node db/populatedb.js`