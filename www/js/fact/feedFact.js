app.factory('feedFact', function() {
    
    var likes = [];
    
    var feed = [
                    {
                        "title": "Hårmässa",
                        "img": "https://c1.staticflickr.com/9/8300/7997573453_81c3081276_b.jpg",
                        "description": "Årliga hårmässan går av stapeln under helgen, Karlshamns frisörer kommer ställa ut i Citygallerian",
                        "likes": 134,
                        "company": "Citygallerian",
                        "date": "10-10-2015"
                    },
                    {
                        "title": "Höstmarknad",
                        "img": "https://s-media-cache-ak0.pinimg.com/236x/64/e5/27/64e527acffa8c17963dcc555cc0de90c.jpg",
                        "description": "Höstmarknad på torget framför Willy´s från den 29/9 till 1/10. kom och se artister och handla närproducerade produkter.",
                        "likes": 89,
                        "company": "Karlshamns Kommun",
                        "date": "20-10-2015"
                    },
                    {
                        "title": "Sveriges största Cirkus",
                        "img": "http://cirkor.se/sites/default/files/performance_list_images/WLAC_Poster.jpg",
                        "description": "En fartfylld och spännande kväll med allt från elefanter till akrobater och clowner.",
                        "likes": 180,
                        "company": "Cirkus Cirkör",
                        "date": "5-9-2015"
                    },
                    {
                        "title": "ElektroFestival 2.0",
                        "img": "http://www.otherfocus.com/wp-content/uploads/2012/04/final.jpg",
                        "description": "Endagsfestival med massor av härlig electronisk musik! 18 års gräns gäller.",
                        "likes": 268,
                        "company": "&Vin",
                        "date": "10-11-2015"
                    },
                    {
                        "title": "Musikkväll i Kyrkan",
                        "img": "http://twu.ca/academics/samc/events/2013-2014-events/poster-chamber-music-fa13.jpg",
                        "description": "En stämningsfyll kväll med våra lokala musiktallanger. vi bjuder på kaffe och bullar efter första akten.",
                        "likes": 61,
                        "company": "Carl Gustafs Kyrkan",
                        "date": "6-6-2016"
                    }
                   ];
    
    return {
        getFeed: function() {
            return feed;
        },
        getLikes: function(){
            return likes;
        },
        setLikes: function(index){
            feed[index].likes = feed[index].likes + 1; 
            if(likes.indexOf(feed[index]) == -1) likes.push(feed[index]);
        },
        removeLikes: function(index){
            feed[index].likes = feed[index].likes - 1; 
            likes.splice(index, 1); 
        }
    };
});