const points = [
    "It is certain",
    "Without a doubt",
    "You may rely on it",
    "Yes, for sure",
    "It is decidedly so",
    "As I see it, yes",
    "Most likely",
    "Yes",
    "Looks good to me",
    "Signs point to yes",
    "Reply hazy, try again",
    "Probably a good idea to not tell you now..",
    "Ask again later",
    "Cannot predict now",
    "Concentrate and ask again",
    "I wouldn't count on it",
    "Outlook not so good",
    "My sources say no",
    "Very doubtful",
    "My answer is no"
];

document.getElementById("response").innerHTML=points;

function onCreated() {
    points.sort(function(a,b){return 0.5 - Math.random()});
    document.getElementById("response").innerHTML=points[0];
    document.getElementById("response").style.fontSize="18px";
    setTimeout(timeup, 4000);

    function timeup() {
        document.getElementById("response").innerHTML="8";
        document.getElementById("response").style.fontSize = "120px";
        document.getElementById("clear").value="";
    }
}