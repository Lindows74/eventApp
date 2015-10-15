app.factory('feedFact', function() {
    
    var likes = [];
    
    var feed = [
                    {
                        "title": "Hårmässa",
                        "img": "https://c1.staticflickr.com/9/8300/7997573453_81c3081276_b.jpg",
                        "description": "Årliga hårmässan går av stapeln under helgen, Karlshamns frisörer kommer ställa ut i Citygallerian",
                        "likes": 0,
                        "company": "Citygallerian",
                        "date": "10-10-2015"
                    },
                    {
                        "title": "Höstmarknad",
                        "img": "https://s-media-cache-ak0.pinimg.com/236x/64/e5/27/64e527acffa8c17963dcc555cc0de90c.jpg",
                        "description": "Höstmarknad på torget framför Willy´s från den 29/9 till 1/10. kom och se artister och handla närproducerade produkter.",
                        "likes": 0,
                        "company": "Karlshamns Kommun",
                        "date": "20-10-2015"
                    },
                    {
                        "title": "Sveriges största Cirkus",
                        "img": "http://cirkor.se/sites/default/files/performance_list_images/WLAC_Poster.jpg",
                        "description": "En fartfylld och spännande kväll med allt från elefanter till akrobater och clowner.",
                        "likes": 0,
                        "company": "Cirkus Cirkör",
                        "date": "05-09-2015"
                    },
                    {
                        "title": "ElektroFestival 2.0",
                        "img": "http://www.otherfocus.com/wp-content/uploads/2012/04/final.jpg",
                        "description": "Endagsfestival med massor av härlig electronisk musik! 18 års gräns gäller.",
                        "likes": 0,
                        "company": "&Vin",
                        "date": "10-11-2015"
                    },
                    {
                        "title": "Musikkväll i Kyrkan",
                        "img": "http://twu.ca/academics/samc/events/2013-2014-events/poster-chamber-music-fa13.jpg",
                        "description": "En stämningsfyll kväll med våra lokala musiktallanger. vi bjuder på kaffe och bullar efter första akten.",
                        "likes": 0,
                        "company": "Carl Gustafs Kyrkan",
                        "date": "06-06-2016"
                    },
                    {
                        "title": "Utebio",
                        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITtOqJ-KvKkp7-zxO2Z6P6NnmTZp-PI7sG4SETt6rwQrkGnDbxg",
                        "description": "Kvällen bjuder på filmer såsom Pulpfiction och Alien",
                        "likes": 0,
                        "company": "Bio Metropol",
                        "date": "01-08-2015",
                    },
                    {
                        "title": "Föreläsning, Technovetenskap",
                        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWqZzLDEZRTfkjLsvLVZvmr77lqHAMM26T8uGViKEXaqD36wWQZQ",
                        "description": "En föreläsning runt för och nackdelarna av ett öppet och fritt internet.",
                        "likes": 0,
                        "company": "Blekinge Tekniska Högskola",
                        "date": "04-11-2015"
                    },
                    {
                        "title": "Bartömmning",
                        "img": "https://cdn2.cdnme.se/cdn/6-2/1513845/images/2011/beggars-banquet-12-augusti-poster_160860297.jpg",
                        "description": "Månadens sista kväll för våran utebar, kom och fynda.",
                        "likes": 0,
                        "company": "Bonken",
                        "date": "04-10-2015"
                    },
                    {
                        "title": "Loppmarknad",
                        "img": "http://www.sfmontessori.se/wp-content/uploads/2013/04/SF-Montessori_Loppis_2013_poster1.jpg",
                        "description": "Kom och fynda allt som du kan tänka dig! över 200 bord stor loppis!",
                        "likes": 0,
                        "company": "Blekinge Län",
                        "date": "04-11-2015"
                    },
                    {
                        "title": "Ekologisk Skördemarkand",
                        "img": "http://www.thinkorganic.se/wp-content/uploads/2014/09/mandelmanns.jpg",
                        "description": "Här kan du köpa närodlad Ekologisk mat av högsta kvalitet.",
                        "likes": 0,
                        "company": "Torgaktivitet AB",
                        "date": "04-09-2015"
                    },
                    {
                        "title": "Konstutställning",
                        "img": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMytlXX2f1PLhU5ozNEfiwqMPFMO0_IrEZRPO-1z8xjxOhbA6Q",
                        "description": "Många av traktens konstnärer kommer ställa ut i kommunhuset under hela helgen.",
                        "likes": 0,
                        "company": "Blekinge Län",
                        "date": "04-09-2015"
                    },
                    {
                        "title": "Trubadursittning",
                        "img": "http://bahnhofbar.com/wp-content/uploads/2013/04/AftBuss_2013_Sefyr_19_4.jpg",
                        "description": "Häng med på en magisk kväll med levande musik och god mat.",
                        "likes": 0,
                        "company": "Tures Resturant",
                        "date": "04-09-2015"
                    }
                   ];
                   
    var companies = {
        "Citygallerian": {
            "description": "Karlshamns Citygallera ligger mitt i stan nära till allt. Här kan du göra allt från att shoppa till att låna böker i vårat biblotek och fika. Välkommna till Karlshamns trevligaste platts!",
            "phoneNr": "020 123 12 12",
            "email": "Citygallerian@Karlshamn.se"
        },
        "Karlshamns Kommun": {
            "description": "Karlshamns Kommun anordnar flera event varje år, bland annat så anordnar vi de årliga marknaderna och konsterter på torget.",
            "phoneNr": "020 321 32 32",
            "email": "info@karlshamnskommun.se"
        },
        "Cirkus Cirkör": {
            "description": "Cirkus Cirkör startades 1995 med målet att etablera nycirkuskonsten i Sverige, konstnärligt och pedagogiskt samt sätta Sverige på nycirkusens världskarta.",
            "phoneNr": "020 213 21 21",
            "emial": "cirkus@cirkor.se"
        },
        "&Vin": {
            "description": "Vi har stor erfarenhet av fester & event och vi tar oss gärna tid att visa er våra lokaler och möjligheter. Vi kan hjälpa till med bokning av trubadurer, liveband, stand up comedy, teambildningar, vinprovningar mm.",
            "phoneNr": "020 546 45 54",
            "emial": "&Vin@gamil.com"
        },
        "Carl Gustafs Kyrkan": {
            "description": "Carl Gustafs kyrka i Karlshamns församling i Lunds stift är ritad av Erik Dahlbergh. Kyrkan, som ligger mitt i Karlshamn, började byggas på 1680-talet och invigdes 1702, med namn efter stadens grundare Karl X Gustav.",
            "phoneNr": "020 789 78 78",
            "emial": "Cgkyrkan@svenskakyrkan.se"
        },
        "Bio Metropol": {
            "description": "Metropol i Karlshamn är en av de klassiska biograferna. Byggd 1923 av Kapten O.W Ericsson och ritad av arkitekt Axel Stenberg, vilken även hade ritat biografen Victoria i Malmö.",
            "phoneNr": "020 987 98 98",
            "emial": "metropo@karlshamn.se"
        },
        "Blekinge Tekniska Högskola": {
            "description": "För oss är det naturligt med ett nära samarbete med näringslivet och arbetsmarknaden under studietiden. Vi har forskare som är bland de främsta i världen inom sina områden och studenter som vunnit priser för sina goda idéer.",
            "phoneNr": "404 40 44 04",
            "emial": "Bth@blekinge.se",
        },
        "Bånken": {
            "description": "Bånken är inte enbart en restaurang och pub utan vi har även Club Nights onsdag, fredag, lördag samt liveunderhållning och musik-quiz vissa kvällar.",
            "phoneNr": "567 657 65",
            "emial": "Banken@banken.se", 
        },
        "Blekinge Län": {
            "description": "Efter att ha tillfallit Sverige år 1658 stod Blekinge under Kristianstads län fram till år 1680 då det förenades med Kalmar län. År 1683 upprättades emellertid Blekinge län, vilket har bestått oavbrutet sedan dess.",
            "phoneNr": "546 54 54",
            "emial": "Blekinge@hotmail.se",
        },
        "Torgaktivitet AB": {
            "description": "Vi anordnar olika sorters events på torg i hela Sverige",
            "phoneNr": "879 87 87",
            "emial": "torget@gamil.com",
        },
        "Tures Resturant": {
            "description": "Tures Resturant är Karlshamns absolut anrikaste restaurang, belägen där ingen hittar oss men med sverigest godaste mat.",
            "phoneNr": "708 78 78",
            "emial": "tures@gamil.com",
        }
    };
    
    return {
        getFeed: function() {
            return feed;
        },
        getFeedItem: function(name) {
            for (var i = 0; i < feed.length; i++) {
                if(feed[i].title == name){
                    return feed[i];
                }
            }
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
        },
        getCompanyInfo: function(name){
            return companies[name];
        }
    };
});