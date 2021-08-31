/*
 * @Description: 始于颜值, 陷于才华, 忠于人品
 * @Author: jianjian
 * @Date: 2021-08-31 22:19:08
 * @LastEditTime: 2021-08-31 22:33:30
 */
const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded());

// 允许跨域
app.all('*', (req, res, next) => {
    const { origin, Origin, referer, Referer } = req.headers;
    const allowOrigin = origin || Origin || referer || Referer || '*';
      res.header("Access-Control-Allow-Origin", allowOrigin);
      res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
      res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
      res.header("Access-Control-Allow-Credentials", true); //可以带cookies
      res.header("X-Powered-By", 'Express');
      if (req.method == 'OPTIONS') {
        res.sendStatus(200);
      } else {
      next();
      }
  });

app.use("/api/interview", require("./routers/searchRouter"))

module.exports = app;