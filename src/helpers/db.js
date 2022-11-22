const { Pool, Query } = require('pg');

const connectionString = 'postgresql://postgres:PoC3B6fiev9jnByQ@db.acgacwluvxchekxcadfj.supabase.co:5432/postgres';

const db = new Pool({
  connectionString,
});

const submit = Query.prototype.submit;
Query.prototype.submit = function () {
  const text = this.text;
  console.log(text);
  submit.apply(this, arguments);
};

module.exports = db;
