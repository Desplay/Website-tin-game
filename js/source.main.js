//  ---------------- jquery ----------------------

$(document).ready(function () {
  $("#loadmore-btn").click(function () {
    $("#hide")
      .first()
      .show(0, function showNext() {
        $(this).next("#hide").show(0, showNext);
      });
    $(".loadmore").hide();
  });
});

//  ---------------- javascripts ----------------------

const data = new Array();

function getTime() {
  const date = new Date();
  var Mins = date.getMinutes();
  if (Mins < 10) Mins = "0" + date.getMinutes();
  var Hour = date.getHours();
  if (Hour < 10) Hour = "0" + date.getHours();
  return Hour + ":" + Mins + " " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
}

function createCMT(data) {
  var name = document.createElement("b");
  name.appendChild(document.createTextNode(data.name + "  "));

  var date = document.createElement("h5");
  var temp = document.createElement("i");
  temp.appendChild(document.createTextNode(getTime()));
  date.insertBefore(name, null);
  date.insertBefore(temp, null);
  const element = document.getElementById("cmt-box");
  var cmt = document.createElement("p");
  cmt.appendChild(document.createTextNode(data.cmt));
  const box = document.createElement("div");
  box.setAttribute("class", "comment-line");
  box.insertBefore(date, null);
  box.insertBefore(cmt, null);
  element.insertBefore(box, null);
}

function getComment() {
  const temp = {
    name: document.getElementById("name").value,
    cmt: document.getElementById("cmt").value,
  };
  data.push(temp);
  if (data[data.length - 1].cmt === "") return alert("Hãy nhập bình luận");
  if (data[data.length - 1].name === "") return alert("Hãy nhập tên để được bình luận");
  createCMT(data[data.length - 1]);
  getNumComment();
}

function getNumComment() {
  let number = data.length + " bình luận";
  var num_cmt = document.createElement("h5");
  num_cmt.appendChild(document.createTextNode(number));
  num_cmt.setAttribute("id", "num-cmt");
  const num = document.getElementById("get-cmt");
  num.removeChild(document.getElementById("num-cmt"));
  num.insertBefore(num_cmt, null);
}
