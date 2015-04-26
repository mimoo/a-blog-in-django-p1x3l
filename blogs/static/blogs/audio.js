$(document).ready(function(){

    // playlist
    var playlist = [
    {
    	'name' : 'Royal Refix - Baby Bash - Suga Suga (remix)',
    	'src' : 'Baby Bash - Suga Suga (remix).mp3'
    },
    {
    	'name' : 'Carla\'s Dreams Feat. INNA - P.O.H.U.I.',
    	'src' : 'P.O.H.U.I..mp3'
    },
    {
    	'name' : 'Childish Gambino - The Worst Guys ft Chance The Rapper',
    	'src' : 'The Worst Guys ft  Chance The Rapper.mp3'
    },
    {
    	'name' : 'Cookin Soul - 2PAC - Old School (Remix)',
    	'src' : '2PAC - Old School (Remix).mp3'
    },
    {
    	'name' : 'Le P - History',
    	'src' : '02 History.mp3'
    },
    {
    	'name' : 'Warren Zevon - My Shit\'s Fucked Up',
    	'src' : 'My Shit\'s Fucked Up.mp3'
    },
    {
    	'name' : 'Teemid - Kylie Minogue - Love At First Sight (remix)',
    	'src' : 'Kylie Minogue - Love At First Sight.mp3'
    },
    {
    	'name' : 'CHVRCHES - Strong Hand',
    	'src' : '13 Strong Hand.mp3'
    },
    {
    	'name' : 'CHVRCHES - Arctic Monkeys - Do I Wanna Know (cover)',
    	'src' : 'Arctic Monkeys - Do I Wanna Know (co.mp3'
    },
	{
	    'name' : "American Authors - Best Day Of My Life",
	    'src' : "American Authors - Best Day Of My Li.mp3"
	},
	{
		'name' : 'FIXYN - Sultan & Ned Shepard - All These Road feat. Zella Day & Sam Martin (remix)',
		'src' : 'Sultan & Ned Shepard - All These Roa.mp3'
	},
	{
	    'name' : "Britney Spears - Brightest Morning Star",
	    'src' : "11 Brightest Morning Star.mp3"
	},
	{
	    'name' : "Ida Maria - Oh My God",
	    'src' : "01 Oh My God.mp3"
	},
	{
	    'name' : "Miley Cyrus - Wrecking Ball",
	    'src' : "06 Wrecking Ball.mp3"
	},
	{
	    'name' : "Miley Cyrus - 23",
	    'src' : "23 (Feat. Juicy J, Wiz Khalifa & Mil.mp3"
	},
	{
		'name' : 'Phaeleh - Ludovico Einaudi - Walk (remix)',
		'src' : 'Ludovico Einaudi - Walk (Remix).mp3'
	},
	{
	    'name' : "Fake Your Dreams",
	    'src' : "Fake Your Dreams.mp3"
	},
	{
	    'name' : "Flume - Disclosure - You & Me (remix)",
	    'src' : "01 Disclosure - You & Me (feat. Eliz.mp3"
	},
	{
	    'name' : "Deadmau5 - Strobe (remix)",
	    'src' : "Deadmau5 - Strobe (Remix).mp3"
	},
	{
	    'name' : "Oneself - Bluebird",
	    'src' : "03 Bluebird.mp3"
	},
	{
	    'name' : "Purity Ring - Soulja Boy - Grammy (cover)",
	    'src' : "Grammy (Soulja Boy Cover).mp3"
	},
	{
	    'name' : "Cid Rim - CHVRCHES - Recover (remix)",
	    'src' : "CHVRCHES - Recover (remix).mp3"
	},
	{
	    'name' : "Lucy Schwartz - Boomerang",
	    'src' : "Boomerang (Arrested Development ).mp3"
	},
	{
	    'name' : "Miike Snow - Passion Pit - Carried Away",
	    'src' : "Carried Away (Passion Pit vs Miike S.mp3"
	},
	{
	    'name' : "New Order - Ceremony",
	    'src' : "1-01 Ceremony.mp3"
	},
	{
	    'name' : "Flux Pavilion - I Feel It",
	    'src' : "I Feel It.mp3"
	},
	{
	    'name' : "The Bloody Beetroots - Chronicles Of A Fallen Love",
	    'src' : "01 Chronicles Of A Fallen Love (feat.mp3"
	},
	{
		'name' : 'Hannes Fischer - Soko - I Kill Her (remix)',
		'src' : 'I Kill Her (Hannes Fischer Remix).mp3'
	},
	{
	    'name' : "Ignition",
	    'src' : "01 Ignition (remix).mp3"
	},
	{
	    'name' : "Pink - Fuckin' Perfect",
	    'src' : "20 Fuckin' Perfect.mp3"
	},
	{
		'name' : 'Stupeflip - Stupeflip Vite',
		'src' : 'Stupeflip vite !!! (radio edit).mp3'
	},
	{
		'name' : 'Daniela Andrade - Daughte - Youth (cover)',
		'src' : 'Daughter - Youth (Cover).mp3'
	},
	{
		'name' : 'OVERWERK - Werk Out',
		'src' : 'Werk Out.mp3'
	},
	{
		'name' : 'Sound Remedy - Lisa Mitchell - Neopolitan Dreams (remix)',
		'src' : 'Lisa Mitchell - Neopolitan Dreams (S.mp3'
	},
	{
	    'name' : "Cro - Easy",
	    'src' : "40 Easy.mp3"
	},
	{
	    'name' : "Hudson - Against The Grain",
	    'src' : "01 Against The Grain.mp3"
	},
	{
		'name' : 'Summer Heart - I Wanna Go',
		'src' : 'I Wanna Go.mp3'
	},
	{
	    'name' : "Alex Gaudino - The Wanted - Glad You Came (remix)",
	    'src' : "14 Glad You Came (Alex Gaudino Remix.mp3"
	},
	{
	    'name' : "The XX - Crystalised",
	    'src' : "03 Crystalised.mp3"
	},
	{
		'name' : 'DJ 21azy - Childish Gambino vs Chiddy Bang - Put It In Your Manners',
		'src' : 'Put It In Your Manners (DJ 21azy Mas.mp3'
	},
	{
		'name' : 'Bastille - City High - What Would You Do (cover)',
		'src' : 'What Would You Do_ (City High Cover).mp3'
	},
	{
		'name' : 'Wolfgang Gartner - Red Line',
		'src' : 'Red Line.mp3'
	},
	{
	    'name' : "Billy Joel - Piano Man",
	    'src' : "01 Piano Man.mp3"
	},
	{
		'name' : 'Le Castle Vania - Kaskade - Turn It Down (remix)',
		'src' : 'Turn It Down (Le Castle Vania Remix).mp3'
	},
	{
	    'name' : "Radiohead - High and Dry",
	    'src' : "03 High And Dry.mp3"
	},
	{
		'name' : 'The Neighbourhood - Sweater Weather',
		'src' : 'Sweater Weather.mp3'
	},
	{
	    'name' : "Cazzettes Androids Sound Hot - Spencer & Hill and Nadia Ali - Believe It",
	    'src' : "Believe It (Cazzettes Androids Sound.mp3"
	},
	{
	    'name' : "Sleigh Bells - Comeback Kid",
	    'src' : "Comeback Kid.mp3"
	},
	{
	    'name' : "Eminem - Superman",
	    'src' : "13 Superman.mp3"
	},
	{
	    'name' : "Amateur Best - Disparate Youth (remix)",
	    'src' : "Disparate Youth [Amateur Best Remix].mp3"
	},
	{
	    'name' : "Ashworth - Ass Back Home (remix)",
	    'src' : "Ass Back Home (Ashworth Remix).mp3"
	},
	{
	    'name' : "Blackstreet - No Diggity (feat Dr. Dre)",
	    'src' : "04 No Diggity (feat Dr Dre).mp3"
	},
	{
	    'name' : "Mattafix - Big City Life",
	    'src' : "02 Big City Life.mp3"
	},
	{
	    'name' : "Chiddy Bang - Talking To Myself",
	    'src' : "11 Talking to Myself.mp3"
	},
	{
	    'name' : "Mumford & Sons - The Cave",
	    'src' : "106 The Cave.mp3"
	},
	{
	    'name' : "HOHME - Eagle Eyes",
	    'src' : "Eagle Eyes (Kaskade vs. Sander Van D.mp3"
	},
	{
	    'name' : "PrototypeRaport - Drive Hard",
	    'src' : "Drive Hard.mp3"
	},
	{
	    'name' : "Dada Life - Buzzin'",
	    'src' : "04 Buzzin'.mp3"
	},
	{
	    'name' : "Skrillex - Kill Everybody",
	    'src' : "03 Kill Everybody.mp3"
	},
	{
	    'name' : "Childish Gambino - Break (AOTL)",
	    'src' : "Break (AOTL).mp3"
	},
	{
	    'name' : "C2C - Down The Road",
	    'src' : "Down The Road.mp3"
	},
	{
	    'name' : "Muse - Map Of Your Head",
	    'src' : "1-05 Map Of Your Head.mp3"
	},
	{
	    'name' : "Katty Perry - Teenage Dream",
	    'src' : "01 Teenage Dream.mp3"
	},
	{
	    'name' : "Jacob Plant - Sun Of A Gun (remix)",
	    'src' : "01 Sun of a gun (Jacob Plant Remix).mp3"
	},
	{
	    'name' : "SALM - Rondoparisiano",
	    'src' : "01 Rondoparisiano.mp3"
	},
	{
	    'name' : "다이나믹 듀오 × 주희 - Gone (New Ways Always)",
	    'src' : "01 GONE (New Ways Always).mp3"
	},
	{
		'name' : "Paramore - Misery Business",
		'src' : "04 Misery Business.mp3"
	},
	{
		'name' : 'The Cardigans - My Favourite Game',
		'src' : "08 My Favourite Game.mp3"
	},
	{
		'name' : 'Britney Spears - Heaven On Earth',
		'src' : '05 Heaven On Earth.mp3'
	},
	{
		'name' : 'Mariah Carey, Beyonce, ... - Just Stand Up',
		'src' : 'Just Stand Up.mp3'
	},
	{
		'name' : 'Outlawz - Real Talk',
		'src' : 'Real talk.mp3'
	},

    ]

    // VARS

    var ii = 0
    var duration = 0
    var mp3_folder = "/mp3s/"
    var audio = new Audio(mp3_folder + playlist[ii].src)

    $('.info').text(playlist[ii].name)

    // change song if can't load
//    audio.addEventListener('error', function(ev) {
//	change("forward")
  //  }, false);
    
    // duration of the song
    audio.addEventListener('durationchange', function() { 
	duration = audio.duration
    })

    /*http://webdesign.tutsplus.com/tutorials/create-a-customized-html5-audio-player--webdesign-7081
      $("#seek").bind("change", function() {
      song.currentTime = $(this).val();
      $("#seek").attr("max", song.duration);
      });*/

    /* change favicon dynamically when playing music
       document.head || (document.head = document.getElementsByTagName('head')[0]);
       
       function changeFavicon(src) {
       var link = document.createElement('link'),
       oldLink = document.getElementById('dynamic-favicon');
       link.id = 'dynamic-favicon';
       link.rel = 'shortcut icon';
       link.href = src;
       if (oldLink) {
       document.head.removeChild(oldLink);
       }
       document.head.appendChild(link);
       }
    */

    // update time of music
    audio.addEventListener('timeupdate', function (){
	curtime = parseInt(audio.currentTime, 10) * 100 / duration
	$(".load").css("width", curtime + "%")
    })
    
    // function to change music 
    function change(direction)
    {
	if(direction == "forward")
	{
	    ii++
	}
	else
	{
	    ii--
	}
	if(ii < 0)
	{
	    ii = 0
	}
	if(ii + 1 > playlist.length)
	{
	    ii = 0
	}
	audio.src = mp3_folder + playlist[ii].src
	audio.load()
	$('.info').text(playlist[ii].name)
	if($('.play').attr('display') != 'none')
	{
	    $('.play').hide();
	    $('.pause').show();
	}
	audio.play()
    }

    // when song end, move forward
    audio.addEventListener('ended', function (){
	change("forward")
    })

    // forward button
    $('.forward').click(function(){
	change("forward")
	return false
    })

    // backward button
    $('.backward').click(function(){
	change("backward")
	return false
    })

    // play button
    $('.play').click(function(){
		audio.play()
		$(this).hide()
		$('.pause').show()
		return false
    })

    // pause button
    $('.pause').click(function(){
	audio.pause()
	$(this).hide()
	$('.play').show()
	return false
    })
});
