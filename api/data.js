const {Pool} = require('pg')
const pool = new Pool();

var data = {
  "health":{},
  "nutrition":{},
  "time": {}
}

var query = "select * from health LIMIT 1;"
pool.query(query, (error, results) => {
  if (error) {
    throw error
  }
  columns = []
  results.fields.forEach(field => {
    data.health[field.name] = -1;
  });
});

query = "select * from nutrition LIMIT 1;"
pool.query(query, (error, results) => {
  if (error) {
    throw error
  }
  columns = []
  results.fields.forEach(field => {
    data.nutrition[field.name] = -1;
  });
});

query = "select * from time LIMIT 1;"
pool.query(query, (error, results) => {
  if (error) {
    throw error
  }
  columns = []
  results.fields.forEach(field => {
    data.time[field.name] = -1;
  });
});

const get_today = (request, response) => {
    let data_ = JSON.parse(JSON.stringify(data));
    pool.query('SELECT * FROM health WHERE Date_ = current_date;', (error, results) => {
      if (error) {
        throw error
      }
      if(results.rows.length == 0){
        //response.status(200).json(data_)
      }else{

        Object.keys(results.rows[0]).forEach(key => {
            data_.health[key] = results.rows[0][key]
        })
      }
        pool.query('SELECT * FROM nutrition WHERE Date_ = current_date;', (error, results) => {
          if (error) {
            throw error
          }
          if(results.rows.length == 0){
            //response.status(200).json(data_)
          }else{
            Object.keys(results.rows[0]).forEach(key => {
              data_.nutrition[key] = results.rows[0][key]
            })
          }
          pool.query('SELECT * FROM time WHERE Date_ = current_date;', (error, results) => {
            if (error) {
              throw error
            }
            if(results.rows.length == 0){
              response.status(200).json(data_)
            }else{
            Object.keys(results.rows[0]).forEach(key => {
              data_.time[key] = results.rows[0][key]
              response.status(200).json(data_)
            })
          
          }
        })
      })
  })
}

const get_date = (request, response) => {
  let data_ = JSON.parse(JSON.stringify(data));
  let date = request.query.date
  pool.query(`SELECT * FROM health WHERE Date_ = '${date}';`, (error, results) => {
    if (error) {
      throw error
    }
    if(results.rows.length == 0){
      response.status(200).json(data)
    }else{
      Object.keys(results.rows[0]).forEach(key => {
        data_.health[key] = results.rows[0][key]
      })
      pool.query(`SELECT * FROM nutrition WHERE Date_ = '${date}';`, (error, results) => {
        if (error) {
          throw error
        }

        Object.keys(results.rows[0]).forEach(key => {
            data_.nutrition[key] = results.rows[0][key]
        })
      pool.query('SELECT * FROM time WHERE Date_ = current_date;', (error, results) => {
        if (error) {
          throw error
        }
        if(results.rows.length == 0){
          response.status(200).json(data_)
        }else{
        Object.keys(results.rows[0]).forEach(key => {
          data_.time[key] = results.rows[0][key]
        })
      response.status(200).json(data_)
      }
    })
    })
  }
})
}

module.exports = {
    get_today,
    get_date
}