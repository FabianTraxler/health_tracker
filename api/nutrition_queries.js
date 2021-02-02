const {Pool} = require('pg')
const pool = new Pool();

const getAll = (request, response) => {
    pool.query('SELECT * FROM nutrition', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
    return
  }


const saveValues = (request, response) => {
  let query_1 = "INSERT INTO nutrition (date_";
  let query_2 = "VALUES (current_date";
  let query_3 = "ON CONFLICT (Date_) DO UPDATE SET date_=current_date";
  for (var key of Object.keys(request.body)) {
    query_1 += "," + key;
    query_2 += "," + request.body[key];
    query_3 += "," + key + "=" + request.body[key];
  }
  let query = query_1 + ") " + query_2 + ") " + query_3 + ";";
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json({"Success":"True"})
  })
  return
}

const getColumns = (request, response) => {
  let query = "select * from nutrition LIMIT 1;"
  pool.query(query, (error, results) => {
    if (error) {
      throw error
    }
    columns = []
    results.fields.forEach(element => {
      columns.push(element.name)
    });
    response.status(200).json(columns)
  })
  return
}

module.exports = {
  getAll,
  saveValues,
  getColumns
}