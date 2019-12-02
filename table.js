/*
  Name: Yufeng Tan
  E-mail: Yufeng_Tan@student.uml.edu
  Assignment: hw7, Using the jQuery Validation Plugin with Your Dynamic Table
              validation using the jQuery Validation plugin (http://plugins.jquery.com).
  This is the javascrip file for hw7
*/

function createTable(){
  // get values from input
  var mul_s = +document.getElementById("multiplier_start").value
  var mul_e = +document.getElementById("multiplier_end").value
  var mulcnt_s = +document.getElementById("multiplicant_start").value
  var mulcnt_e = +document.getElementById("multiplicant_end").value

  var body = document.getElementsByTagName("body")[0];
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  for (var i = mul_s, ii = mul_e + 1; i <= ii;  ++i) {
    var row = document.createElement("tr");
    for (var j = mulcnt_s, jj = mulcnt_e + 1; j <= jj; ++j) {
      var cell = document.createElement("td");
      var cellText;
      if (i == mul_s && j == mulcnt_s) {
        cellText = document.createTextNode("");
      }
      else if (i == mul_s) {
        cellText = document.createTextNode(j - 1);
      }
      else if(j == mulcnt_s) {
        cellText = document.createTextNode(i - 1);
      }
      else {
        cellText = document.createTextNode((i - 1) * (j - 1));
      }
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    tblBody.appendChild(row);

  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("border", "2");
}
}
