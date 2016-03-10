(function() {
    var get_random_int, get_random_quote, map, old_quotes, quotes, random_map_centre,
        indexOf = [].indexOf || function(item) {
            for (var i = 0, l = this.length; i < l; i++) {
                if (i in this && this[i] === item) return i;
            }
            return -1;
        };

    quotes = [{
        quote: "You can't map a sense of humor. Anyway, what is a fantasy map but a space beyond which There Be Dragons? On the Discworld we know that There Be Dragons Everywhere. They might not all have scales and forked tongues, but they Be Here all right, grinning and jostling and trying to sell you souvenirs.",
        author: "Terry Pratchett",
        title: "The Color of Magic"
    }, {
        quote: "Writing has nothing to do with meaning. It has to do with landsurveying and cartography, including the mapping of countries yet to come.",
        author: "Gilles Deleuze"
    }, {
        quote: "Love knows no boundaries. I wish I would have known that before I hired a cartographer to map out my romantic territory.",
        author: "Jarod Kintz",
        title: "The Titanic would never have sunk if it were made out of a sink."
    }, {
        quote: "Regular maps have few surprises: their contour lines reveal where the Andes are, and are reasonably clear. More precious, though, are the unpublished maps we make ourselves, of our city, our place, our daily world, our life; those maps of our private world we use every day; here I was happy, in that place I left my coat behind after a party, that is where I met my love; I cried there once, I was heartsore; but felt better round the corner once I saw the hills of Fife across the Forth, things of that sort, our personal memories, that make the private tapestry of our lives.",
        author: "Alexander McCall Smith",
        title: "Love Over Scotland"
    }, {
        quote: "I believe in such cartography – to be marked by nature, not just label ourselves on a map like the names of rich men and women on buildings. We are communal histories, communal books. ... All I desired was to walk upon such an earth that had no maps.",
        author: "Michael Ondaatje",
        title: "The English Patient"
    }, {
        quote: "A labyrinth is a symbolic journey ... but it is a map we can really walk on, blurring the difference between map and world.",
        author: "Rebecca Solnit",
        title: "Wanderlust: A History of Walking"
    }, {
        quote: "They were maps that lived, maps that one could study, frown over, and add to; maps, in short, that really meant something.",
        author: "Gerald Durrell",
        title: "My Family and Other Animals"
    }, {
        quote: "'That explains a lot,' he said. 'I suppose it's also why we've never glimpsed that giant compass in the corner of the Atlantic. I have to say, I'm a little disappointed.'",
        author: "Gideon Defoe",
        title: "The Pirates! In an Adventure with Scientists"
    }, {
        quote: "A map does not just chart, it unlocks and formulates meaning; it forms bridges between here and there, between disparate ideas that we did not know were previously connected.",
        author: "Reif Larsen",
        title: "The Selected Works of T.S. Spivet"
    }, {
        quote: "A map such as that one is worth many hundreds, and as luck will have it, thousands of dollars. But more than this, it is a remembrance of that time before our planet was so small. When this map was made, I thought, you could live without knowing where you were not living.",
        author: "Jonathan Safran Foer",
        title: "Everything Is Illuminated"
    }, {
        quote: "To put a city in a book, to put the world on one sheet of paper—maps are the most condensed humanized spaces of all... They make the landscape fit indoors, make us masters of sights we can't see and spaces we can't cover.",
        author: "Robert Harbison",
        title: "Eccentric Spaces"
    }, {
        quote: "Map-making had never been a precise art on the Discworld. People tended to start off with good intentions and then get so carried away with the spouting whales, monsters, waves and other twiddly bits of cartographic furniture that they often forgot to put the boring mountains and rivers in at all.",
        author: "Terry Pratchett",
        title: "Moving Pictures"
    }, {
        quote: "Maps codify the miracle of existence.",
        author: "Nicholas Crane",
        title: "Mercator: The Man Who Mapped the Planet"
    }, {
        quote: "Through our maps, we willingly become a part of their boundaries. If our home is included, we feel pride, perhaps familiarity, but always a sense that this is ours. If it is not, we accept our roles as outsiders, though we may be of the same mind and culture. In this way, maps can be dangerous and powerful tools.",
        author: "Debbie Lee Wesselmann",
        title: "Trutor & the Balloonist"
    }, {
        quote: "It was a shack, somewhere out on the outskirts of the Plains town of Scrote. Scrote had a lot of outskirts, spread so widely—a busted cart here, a dead dog there—that often people went through it without even knowing it was there, and really it only appeared on the maps because cartographers get embarrassed about big empty spaces.",
        author: "Terry Pratchett"
    }, {
        quote: "I speak to maps. And sometimes they say something back to me. This is not as strange as it sounds, nor is it an unheard of thing. Before maps, the world was limitless. It was maps that gave it shape and made it seem like territory, like something that could be possessed, not just laid waste and plundered. Maps made places on the edges of the imagination seem graspable and placable.",
        author: "Abdulrazak Gurnah",
        title: "By the Sea"
    }, {
        quote: "When you’re a cartographer, having to make maps sort of comes with the territory.",
        author: "Jarod Kintz",
        title: "A Zebra is the Piano of the Animal Kingdom"
    }, {
        quote: "If I were the King’s official mapmaker, I’d also be the second largest landholder (after the King, of course). Would I own the land? Of course—just look at all the official maps.",
        author: "Jarod Kintz",
        title: "99 Cents For Some Nonsense"
    }, {
        quote: "It seemed that the printers of the African maps had a slightly malicious habit of including, in large letters, the names of towns, junctions, and villages which, while most of them did exist in fact, as a group of thatched huts may exist or a water hole, they were usually so inconsequential as completely to escape discovery from the cockpit.",
        author: "Beryl Markham",
        title: "West with the Night"
    }, {
        quote: "It was ... disconcerting to examine your charts before a proposed flight only to find that in many cases the bulk of the terrain over which you had to fly was bluntly marked: 'UNSURVEYED.'<br>It was as if the mapmakers had said, 'We are aware that between this spot and that one, there are several hundred thousands of acres, but until you make a forced landing there, we won't know whether it is mud, desert, or jungle—and the chances are we won't know then!",
        author: "Beryl Markham",
        title: "West with the Night"
    }, {
        quote: "The United States has never been in a united state, it has never been a united state. It never will. Lines on screens and paper do not change that.",
        author: "Justin K. McFarlane Beau"
    }, {
        quote: "Mental maps. Maps with edges. And for Auden, for so many of us, it's the edges of the maps that fascinate...",
        author: "David Mitchell",
        title: "The Bone Clocks"
    }, {
        quote: "Every sapient species has a long, messy history of powers that rise and fall. The people we remember are the ones who decided how our maps should be drawn. Nobody remembers who built the roads.",
        author: "Becky Chambers"
    }, {
        quote: "The application of GIS is limited only by the imagination of those who use it.",
        author: "Jack Dangermond"
    }, {
        quote: "Knowing where things are, and why, is essential to rational decision-making.",
        author: "Jack Dangermond"
    }, {
        quote: "I've always been fascinated by maps and cartography. A map tells you where you've been, where you are, and where you're going—in a sense it's three tenses in one.",
        author: "Peter Greenaway"
    }, {
        quote: "The early days of GIS were very lonely. No-one knew what it meant.",
        author: "Roger Tomlinson"
    }, {
        quote: "GIS is a form of digital mapping technology.  Kind of like Google Earth, but better.",
        author: "Arnold Schwarzenegger"
    }, {
        quote: "Digital mapping is about to change our world by documenting the real world, then integrating the information into our computers, phones, and lifestyles. Roll over, Mason and Dixon: spurred by space photography, global satellite positioning, mobile phones, search engines and new ways of marketing information for the World Wide Web, the ancient art of cartography is now on the cutting edge.",
        author: "Steven Levy"
    }, {
        quote: "The good cartographer is both a scientist and an artist. He must have a thorough knowledge of his subject and model, the Earth… He must have the ability to generalize intelligently and to make a right selection of the features to show. These are represented by means of lines or colors; and the effective use of lines or colors requires more than knowledge of the subject–it requires artistic judgement.",
        author: "Erwin Josephus Raisz"
    }, {
        quote: "“The foremost cartographers of the land have prepared this for you; it’s a map of the area that you’ll be traversing.”<br>[Blackadder opens it up and sees it is blank]<br>“They’ll be very grateful if you could just fill it in as you go along.”",
        author: "Blackadder"
    }, {
        quote: "In cartography, as in medicine, art and science are inseparable. The perfect map blends art and science into an effective tool of visual communication",
        author: "Dr. Keith Harries",
        title: "Mapping Crime: Principle and Practice"
    }, {
        quote: "A map is the greatest of all epic poems. Its lines and colors show the realization of great dreams.",
        author: "Gilbert H. Grosvenor"
    }, {
        quote: "A number of astronauts, and then all of us who saw the photography from space, marveled at how much the Florida peninsula, meandering Mississippi, the islands of Britain, and the boot of Italy resembled the maps everyone had grown up with. We had taken it for granted that maps were faithful reflections of reality; but we were somehow amazed when reality turned out to be true to the maps.",
        author: "John Noble Wilford",
        title: "The Mapmakers"
    }, {
        quote: "When our maps do not fit the territory, when we act as if our inferences are factual knowledge, we prepare ourselves for a world that isn’t there. If this happens often enough, the inevitable result is frustration and an ever-increasing tendency to warp the territory to fit our maps. We see what we want to see, and the more we see it, the more likely we are to reinforce this distorted perception, in the familiar circular and spiral feedback pattern.",
        author: "Professor Harry L. Weinberg",
        title: "Levels of Knowing and Existence: Studies in General Semantics"
    }, {
        quote: "I am told there are people who do not care for maps, and I find it hard to believe.",
        author: "Robert Louis Stevenson",
        title: "The Art of Writing on Treasure Island"
    }, {
        quote: "Maps are like campfires – everyone gathers around them, because they allow people to understand complex issues at a glance, and find agreement about how to help the land.",
        author: "Sonoma Ecology Center"
    }, {
        quote: "Everything is related to everything else, but near things are more related than distant things.",
        author: "Waldo Tobler"
    }, {
        quote: "Geography is just physics slowed down, with a couple of trees stuck in it.",
        title: "The Last Continent",
        author: "Terry Pratchett"
    }, {
        quote: "Geographers never get lost. They just do accidental field work",
        author: "Nicholas Chrisman"
    }];

    get_random_int = function(low, high) {
        low = low != null ? low : 0;
        high = high != null ? high : 1;
        return Math.floor(Math.random() * high) + low;
    };

    random_map_centre = function(map) {
        return map.setView([get_random_int(30, 120) - 90, get_random_int(0, 360) - 180], get_random_int(2, 5));
    };

    L.mapbox.accessToken = 'pk.eyJ1IjoiYWxwaGEtYmV0YS1zb3VwIiwiYSI6ImxMaVFfVTAifQ.VD93-nQ8FuT4VsPyh8LbBw';

    map = L.mapbox.map('map', 'examples.a4c252ab');

    random_map_centre(map);

    get_random_quote = function(except) {
        var qi;
        if (except != null) {
            if (except.length === quotes.length) {
                except = [];
            }
            while ((qi == null) || indexOf.call(except, qi) < 0) {
                qi = get_random_int(0, quotes.length);
                except.push(qi);
            }
        } else {
            qi = get_random_int(0, quotes.length);
            except = [qi];
        }
        $("#quote").html(quotes[qi]['quote']);
        if (quotes[qi]['title'] != null) {
            $("#author").html(quotes[qi]['author'] + ", ");
            $("#title").html("" + quotes[qi]['title']);
        } else {
            $("#author").html("" + quotes[qi]['author']);
        }
        return except;
    };

    old_quotes = get_random_quote();

    $("#newQuote").click(function() {
        old_quotes = get_random_quote(old_quotes);
        return random_map_centre(map);
    });

    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent("" + ($('#quote').text())));

}).call(this);
