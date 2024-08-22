

 var cl= console.log;
 
 let movieCardContainer = document.getElementById('movieCardContainer');
 
 let IMG_BASE_URL ="https://image.tmdb.org/t/p/w1280/";
 
 
 var result = ``;
 
  for(var i=0; i< movieArray.length; i++){
	  result += `
	    <div class="col-4 mb-4">
	  <div class="card">
	    <figure class="movieCard">
		  <img class="w-100" src="https://image.tmdb.org/t/p/w342${movieArray[i].poster_path}" alt="${movieArray[i].title}" title="${movieArray[i].title}">
		 <figcaption>
		   <div class="movieTitle">
		     <div class="row">
			  <div class="col-md-10">
			    <h4> ${movieArray[i].title} </h4>
			  </div>
			  <div class="col-md-2 align-self-center">
			    <span class="${setRatingBg(movieArray[i].vote_average)} p-1 rating">
				   ${movieArray[i].vote_average}
				</span>
			  </div>
			 </div>
		   </div>
		   <div class="movieOverview">
		    <h5 class="mb-0"> 
			   ${movieArray[i].title}
			 </h5>
			<p> 
			  <em>
			  ${movieArray[i].overview}
			  </em>
			</p>
		   </div>
		 </figcaption>
	    </figure>
	  </div>
	</div>
	  
	  
	  `
	  
  }
 
 
 
 movieCardContainer.innerHTML = result;
 
 
 function setRatingBg(rating){
	 if(rating > 7.5){
		 return 'bg-success'
	 }else if(rating <= 7.5 && rating > 5){
		 return 'bg-warning'
	 }else{
		 return 'bg-danger'
	 }
 }