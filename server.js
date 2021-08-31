/*
 * @Description: 始于颜值, 陷于才华, 忠于人品
 * @Author: jianjian
 * @Date: 2021-08-31 22:19:08
 * @LastEditTime: 2021-08-31 22:34:44
 */
const http = require("http");

const app = require("./app");

const chalk = require("chalk");

const server = http.createServer(app);
server.on("error", (error) => {
  console.log(chalk.red("服务器启动失败" + error));
});
server.listen(8000, "localhost", () => {
  console.log(chalk.green("服务器启动成功,请访问: http://localhost:8000"));
});
