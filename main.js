var container = "#mCSB_2_container ul",
    unit      = "li",
    unitTitleQuery  = "a",
    unitTitleNodeNumber = 0,
    unitTitleSource = "text",
    titleNumberRegex= /^[^0-9]+([0-9]+)[^0-9]([0-9]+)?/,
    unitUriQuery    = "a",
    unitUriNodeNumber = 0, 
    unitUriSource   = "href",
    baseUri         = "www.kissmanga.io";

var data = $(container).children(unit);
var output = [];

for(var i = 0; i < data.length; i++) {
  var title  = data[i].childNodes[unitTitleNodeNumber][unitTitleSource];
  var number, subNumber;

  var matches = parseInt(title.match(titleNumberRegex));
  if(matches){
    var number = matches[1] || 0);
    var subNumber = matches[2] || 0);
  }

  var uri    = data[i].childNodes[unitUriNodeNumber][unitUriSource];
  output.push({"n": number, "sn": subNumber, "t": title, "u": uri})
}

output.sort(function(a, b) {
  if(a.n == b.n) {
    return a.sn - b.sn
  } else {
    return a.n - b.n
  }
})

console.log(output)