function createRequest() {
  try {
    request = new XMLHttpRequest();
  } catch (tryMS) {
    try {
      request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (otherMS) {
      try {
        request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (failed) {
        request = null;
      }
    }
  }	
  return request;
}

// 根据事件获取对象，使用返回的对象代替this
function getActivatedObject(e) {
  var obj;
  if (!e) {
    // 老的IE不支持传入事件对象
    obj = window.event.srcElement;
  } else if (e.srcElement) {
    // 新的IE支持传入事件对象，但表示对象的属性是srcElement而不是target
    obj = e.srcElement;
  } else {
    // 主流浏览器使用target表示对象
    obj = e.target;
  }
  return obj;
}

// 增加事件处理函数
function addEventHandler(obj, eventName, handler) {
  if (document.attachEvent) {
    // 老的IE使用attachEvent
    obj.attachEvent("on" + eventName, handler);
  } else if (document.addEventListener) {
    // 主流浏览器和新的IE使用addEventListener
    obj.addEventListener(eventName, handler, false);
  }
}

