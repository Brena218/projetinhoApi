$ (document).ready(function() {
    var item, title , author , publisher , bookLink , bookImg
    var outputList = document.getElementById("list-output");
    var bookUrl = "https://www.googleapis.com/books/v1/volumes?q="
    var placeHldr = '<img src="https://via.placeholder.com/150">'
    var searchData;

    $("#search").click(function(){
        outputList.innerHTML = ""
        searchData = $("#search-box").val();

        if(searchData === "" || searchData === null ) {
            displayError();
        }
        else{
            $.ajax({
                url: bookUrl + searchData,
                dataType: "json",
                success: function(res) {
                    console.log(res)
                    if(responce.totalItem === 0) {
                       alert("no result!.. try again");
                    }
                    else{
                        $("title").anitem({'margin-top: 10px'});
                        $(".book-list").css('visibility: visible');
                        //displayResults(res);

                    }
                }
                error: function() {
                     alert("Something went wrong!...");
                }
            })
        }
        $("#search-box").val("");
    });

    function displayResults(res) {
        for(var i = 0; i< res.items.lenght; i+=2){
            item = res.item[i];
            title1 = item.volumeInfo.title;
            author1 = item.volumeInfo.author;
            publisher1 = item.volumeInfo.publisher;
            bookIsbn = item.volumeInfo.industryIdentifiers[i].industryIdentifiers
            bookImg1 = (item.volumeInfo.imageLink) ? item.volumeInfo.imageLinks.thumbnail : placerholder

            item2 = res.item[i+1];
            title1 = item2.volumeInfo.title;
            author1 = item2.volumeInfo.author;
            publisher1 = item2.volumeInfo.publisher;
            bookIsbn = item2.volumeInfo.industryIdentifiers[i].industryIdentifiers
            bookImg1 = (item2.volumeInfo.imageLink) ? item2.volumeInfo.imageLinks.thumbnail : placerholder

            outputList.innerHTML += '<div class="row mt-4">'+
                                    formatOutput(bookImg1, title1, author1, publisher1, bookLink1)
                                    formatOutput(bookImg2, title2, author2, publisher2, bookLink2)
                                    '</div>';
        }

        function formatOutput(bookImg, title, author, publisher, bookLink, bookIsbn){
            var viewerUrl = 'book.html?isbn='+bookIsbn;
            var htmlCard = `<div`
        }
    }
})


