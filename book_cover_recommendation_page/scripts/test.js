// function ClickTitle(){
//     var heading = document.getElementById('heading');
//     heading.innerHTML = 'You Clicked!';
// }

// function ShowDate(){
//     var time = document.getElementById('time');
//     time.innerHTML = Date();
// }

const fs = require("fs");
const { parse } = require("csv-parse");

function readCsv(){
  const data = [];

  fs.createReadStream("E:\\PycharmProjects\\book_cover_revised\\book_cover_recommendation_page\\documents\\selected_books.csv")
    .pipe(
      parse({
        delimiter: ",",
        columns: true,
        ltrim: true,
      })
    )
    .on("data", function (row) {
      // 👇 push the object row into the array
      data.push(row);
    })
    .on("error", function (error) {
      console.log(error.message);
    })
    .on("end", function () {
      // 👇 log the result array
      console.log("parsed csv data:");
      var title = '';
      for(var i=0; i<data.length; i++){
        // console.log(data[i].title);
        title += '<li>'+ data[i].title+'</li>';
      }
      document.getElementById('book_info').innerHTML = title;
    });
}
