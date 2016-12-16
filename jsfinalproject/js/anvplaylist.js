/**
 * Created by selcuk on 5/23/14.
 */
function AnvPlaylist(divId, playlist, playerInstance){
    console.log("@AnvPlaylist playlist:", playlist);
    var container = document.getElementById(divId);

    var WIDTH = 150,
        HEIGHT = WIDTH * 9 / 16,
        margin = 0;

    for (var i = 0, len = playlist.length; i < len; i++) {
        var entry = playlist[i];
        var item = document.createElement("div");
        var thumb = document.createElement("img");
        var play = document.createElement("div");
        var title = document.createElement("div");
        var desc = document.createElement("div");
        var header = document.createElement("div");
        /*header.style.position = "absolute";
        header.className = "anv-item-header";
        header.style.top = "0";
        header.style.width = "248px";*/

        item.className = "anv-item";
        item.id = divId + "-anv-item" + i;
		
	
        //item.style.position = "relative";
        item.style.width = WIDTH + "px";
        item.style.height = HEIGHT + "px";
        item.style.margin = margin + "px";
        item.style.overflow = "hidden";
        item.style.color = "white";
        item.style.background = "black";
        item.style.display = "none";
        item.onclick = onItemSelected;
        item.style.cursor = "pointer";
        thumb.style.position = "relative";
        //thumb.style.top = "0";
        //thumb.style.left = "0";


        thumb.onload = onImageLoad;
        thumb.src = entry.src_image_url;
        thumb.width = WIDTH;
        /*play.style.background = "url('img/sprite32.png') 0 -28px";
        play.style.width = "32px";
        play.style.height = "32px";
        play.style.backgroundSize = "400%";
        play.style.position = "absolute";
        play.style.left = "12px";
        play.style.bottom = "12px";
        play.style.display = "block";
        title.style.fontSize =  "12px";
        title.style.letterSpacing =  "0.02em";
        title.style.lineHeight =  "1.6em";
        title.style.position =  "relative";
        title.style.whiteSpace =  "nowrap";
        title.style.fontFamily =  "Arial, sans-serif";
        title.innerHTML = entry.def_title ? entry.def_title.substr(0, 30) + ((entry.def_title.length > 30) ? "..." : ""): "";
        desc.style.fontSize =  "12px";
        desc.style.letterSpacing =  "0.02em";
        desc.style.lineHeight =  "1.2em";
        desc.style.position =  "relative";
        desc.style.fontFamily =  "Arial, sans-serif";
        desc.innerHTML = entry.def_description ? entry.def_description.substr(0, 80) + ((entry.def_description.length > 80) ? "..." : ""): "";*/
        item.appendChild(thumb);
        item.appendChild(header);
        item.appendChild(play);
        header.appendChild(title);
        header.appendChild(desc);
        container.appendChild(item);
//        console.log("language", entry.language);
    }
    function onImageLoad(){
        this.parentNode.style.display = "inline-block";
	
	
    }

    function onItemSelected(){
        pat = /anv-item(.+)/;
        var m = pat.exec(this.id);
        var index = parseInt(m[1]);
        playerInstance.play(playlist[index]);
    }
    return {

    }
}

