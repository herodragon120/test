/**
 * Created by MiM on 22/06/2017.
 */
var mustache = require('mustache'),
    q = require('q'),
    db = require('../fn/db');
exports.load = function() {
    var d=q.defer();
    var sql = 'select user.idUSER,user.tendangnhap,user.hoten,chitietxinban.`comment`,chitietxinban.thoigian from chitietxinban, user WHERE chitietxinban.idUser=user.idUSER ORDER BY thoigian'
    d.resolve(db.load(sql));
    return d.promise;
}
exports.delete = function(entity) {
    var d = q.defer();
    var sql=mustache.render('delete from chitietxinban where idUser="{{id}}"', entity);
    d.resolve(db.delete(sql));
    return d.promise;
}
exports.update = function(entity) {
    var d = q.defer();
    var sql=mustache.render('update user set ngaybatdauban="{{ngay}}" where idUSER="{{id}}"', entity);
    d.resolve(db.delete(sql));
    return d.promise;
}
exports.xinphep=function (entity) {
    var d = q.defer();
    var sql=mustache.render('INSERT INTO chitietxinban(idUser,comment,thoigian) VALUES ("{{id}}" ,"'+entity.comment+'","{{thoigian}}")', entity);
    d.resolve(db.insert(sql));
    return d.promise;
}