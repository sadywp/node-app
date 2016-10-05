var connection = require('./db_education_module');
var mongoose = require('mongoose');
var news_schema = mongoose.Schema({
    id: String,
    title: String,
    date: Date,
    click_count: String,
    summary: String,
    href: String,
    source_type: Number,
    create_at: Date,
    update_at: Date
});

var news_model = connection.model('news_models', news_schema);

module.exports = news_model;