// Let the document load before executing the script
$(document).ready(function(){
    
    // Playlist containing all the links in order from 0 - 24
    // The first entry is blank because arrays start with an index of 0
    var playlist = [
        "",
        "https://www.youtube.com/watch?v=RWWIZiLHbTc", // Tallfølger
        "https://www.youtube.com/watch?v=EzdmWUwM78I", // Tallfølger eksempel 1
        "https://www.youtube.com/watch?v=m64p7QXnn74", // Tallfølger eksempel 2
        "https://www.youtube.com/watch?v=HNfH19idQP0", // Aritmetiske tallfølger
        "https://www.youtube.com/watch?v=x3vvpvktaUs", // Aritmetiske tallfølger eksempel 1
        "https://www.youtube.com/watch?v=1NwaJ838RXU", // Geometriske følger
        "https://www.youtube.com/watch?v=aZDSxA32yKI", // Geometriske følger eksempel 1
        "https://www.youtube.com/watch?v=bl3h5k3NKPY", // Geometriske følger eksempel 2
        "https://www.youtube.com/watch?v=onkTRW0V0SA", // Rekker
        "https://www.youtube.com/watch?v=oDVFr-iFFog", // Rekker eksempel 1
        "https://www.youtube.com/watch?v=6ShJ-P79uFs", // Aritmetiske rekker
        "https://www.youtube.com/watch?v=BmDymKyU2co", // Aritmetiske rekker eksempel 1
        "https://www.youtube.com/watch?v=oZ2kJQLaQWY", // Aritmetiske rekker eksempel 2
        "https://www.youtube.com/watch?v=Nf2sei_DHBw", // Geometriske rekker
        "https://www.youtube.com/watch?v=zBOtOR89BhE", // Geometriske rekker eksempel 1
        "https://www.youtube.com/watch?v=2J4FQY9u60k", // Geometriske rekker eksempel 2
        "https://www.youtube.com/watch?v=To42H0NXKio", // Uendelige rekker
        "https://www.youtube.com/watch?v=PSSZn11SIhc", // Uendelige rekker eksempel 1
        "https://www.youtube.com/watch?v=zea06MyVI7Y", // Uendelige rekker eksempel 2
        "https://www.youtube.com/watch?v=NL0HWC0NDcQ", // Geometriske rekker med variable kvotienter
        "https://www.youtube.com/watch?v=RXgUrnb7h3g", // Geometriske rekker med variable kvotienter eksempel 1
        "https://www.youtube.com/watch?v=VTXtOpAfAk0", // Geometriske rekker med variable kvotienter eksempel 2
        "https://www.youtube.com/watch?v=al4n-EoqxvU", // Induksjonsbeviset
        "https://www.youtube.com/watch?v=MCOwbm4G5ss"  // Induksjonsbeviset eksempel 1
    ];
    
    // Generates the actual boxes
    for(var i = 1; i < 25; i++) {
       $('<div>', {
         'class': 'disabled luke luke-' + i,
         'number': i, //This is used later to determine if box should be enabled/disabled
         'data-url': playlist[i]
       }).appendTo('.container');
        
       // Generates the text for the boxes
       $('<h3>', {
          'class':'nummer',
          'html': 'Luke ' + i 
        }).appendTo('.luke-'+i);
        
        // Get the current time and date
        var today = new Date();
        
        // If the box number is less than or equal to todays date then the box should be enabled
        if( $( ".luke-" + i).attr( "number") <= today.getDate()){
            $("div.luke-" + i).removeClass("disabled");
            $("div.luke-" + i).addClass("enabled");
        }
    }
    
    // This grabs and opens the correct URL from the playlist when a box is clicked
    $(".enabled").click(function() {
        window.open($(this).attr("data-url"));
    })
});