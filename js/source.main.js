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

function createCMT(data) {
  var cmt_line = document.createElement("div");
  cmt_line.setAttribute("class", "cmt-line");

  var name = document.createElement("b");
  name.appendChild(document.createTextNode(data.name));
  
  var cmt = document.createElement("p");
  cmt.appendChild(document.createTextNode(data.cmt));
  const element = document.getElementById("cmt-box");
  element.insertBefore(name, null);
  console.log(data.name)
}

function getComment() {
  var data = {
    name: document.getElementById("name").value,
    cmt: document.getElementById("cmt").value,
  };
  if (data.cmt === "") return alert("Hãy nhập bình luận");
  if (data.name === "") return alert("Hãy nhập tên để được bình luận");
  createCMT(data);
}
