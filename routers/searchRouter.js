/*
 * @Description: 始于颜值, 陷于才华, 忠于人品
 * @Author: jianjian
 * @Date: 2021-05-28 08:33:53
 * @LastEditTime: 2021-08-31 22:33:29
 */
const { Router } = require("express");

const router = new Router();

const axios = require("axios");

router.post("/keyword_search", async (req, res) => {
  console.log(req.body);
  const { login_token, search_phrase } = req.body;
  if (!login_token || !search_phrase) {
    res.send({
      status: "fail",
      message: "请求失败",
      data: null,
    });
  } else {
    const resData = await axios.post(
      "http://3.141.23.218:5000/interview/keyword_search",
      {
        login_token,
        search_phrase,
      }
    );
    res.send({
      data: resData.data,
    });
  }
});

module.exports = router;
