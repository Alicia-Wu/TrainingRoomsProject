const {
  $Message
} = require('../dist/base/index');

const login = () => {
  wx.navigateTo({
    url: '../../pages/login/index'
  })
}
const index = () => {
  wx.navigateTo({
    url: '../../pages/index/index'
  })
}
const show = () => {
  wx.navigateTo({
    url: '../../pages/show/index'
  })
}

const message = (content, type) => {
  $Message({
    content: content,
    type: type
  });
}

module.exports = {
  index: index,
  login: login,
  show: show,
  message: message
}