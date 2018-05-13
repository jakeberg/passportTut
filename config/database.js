const DB_USER = "jake";
const DB_PASSWORD = "19181716";
const DB_URI = `ds115360.mlab.com:15360`;
const DB_NAME = "rsvp";

module.exports = {
    'url' : `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_URI}/${DB_NAME}`,
    'local': `mongodb://localhost/passport`
};



