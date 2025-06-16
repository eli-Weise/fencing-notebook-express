#! /usr/bin/env node
require("dotenv").config();

const { Client } = require("pg");

const SQL = `
DROP TYPE IF EXISTS winner;
DROP TYPE IF EXISTS card;
DROP TYPE IF EXISTS pcard;

CREATE TYPE winner AS ENUM ('my-win', 'opponent-win', 'empty');
CREATE TYPE card as ENUM ('yellow', 'black');
CREATE TYPE pcard as ENUM ('none', 'p-yellow', 'p-red', 'p-black');

CREATE TABLE IF NOT EXISTS bouts (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  opponent TEXT,
  myscore INT,
  opscore INT,
  winner winner DEFAULT 'empty',
  mycards card[] DEFAULT '{}',
  mrred INT,
  opcards card[] DEFAULT '{}',
  opred INT,
  pcards pcard DEFAULT 'none',
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
