//Simulated AJAX Data
var request = {
    responseText: '{"Paragraphs":[{"Paragraph1":"Hi! I am Frank."},{"Paragraph2":"My name is Frank Amaral and I am a web designer from Canada, Ontario. I am currently studying my first year of Interactive Web Development Web Design at Georgian College in Barrie, ON. Soon to freelance as a side job during my studies."}]}'
};

//Simplified
//If (request.readyState === 4) { ...

var paragraph = JSON.parse(request.responseText);
var paragraphArray = paragraph.Paragraphs;

//Arrays
document.getElementById('Paragraph1').innerHTML = paragraphArray[0].Paragraph1;
document.getElementById('Paragraph2').innerHTML = paragraphArray[1].Paragraph2;