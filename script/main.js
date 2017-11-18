$(document).ready(function(){
	var searchTerm; //setting a variable searchTerm 
	$("#search").click(function(){
		searchTerm = $("#searchTerm").val(); //setting searchTerm as $("#searchTerm").val()
	
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?"; //setting a variable url that contains the api endpoint
		/****AJAX call for the API****/

		$.ajax({
			type : "GET",
			url : url,
			async : true,
			dataType : "json",
			success : function(data){ 
			 $("#output").html(""); //give #output an empty string so the previus result will be deleted
				for (var i=0; i<data[0].length; i++) { // a loop so the output becomes more tha one result 
					$("#output").prepend("<li><a href="+data[3][0]+">"+data[1][0]+"</a><p>"+data[2][0]+"</p></li>");
				}
			},
			error : function(errorMessage){
				alert("Error");
			}
		})

	})
});