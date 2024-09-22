#! /usr/bin/env node
require("dotenv").config();

const { Client } = require("pg");

const SQL = `

CREATE TYPE winner AS ENUM ('my-win', 'opponent-win', 'empty');
CREATE TYPE card as ENUM ('yellow', 'black');
CREATE TYPE pcard as ENUM ('p-yellow', 'p-red', 'p-black');

CREATE TABLE IF NOT EXISTS bouts (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  myscore INT,
  opscore INT,
  winner winner DEFAULT 'empty',
  mycards card[],
  mrred INT,
  opcards card[],
  opred INT,
  pcards pcard,
  notes TEXT
);
`
;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.ROLE_NAME}:${process.env.ROLE_PASSWORD}@localhost:5432/fencers`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
