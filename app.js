let globalData;
function getMyHoroscope() {
    // document.getElementById('photo').style.display = "block";
    let sign = document.getElementById('sign').value
    document.getElementById('about').style.display = "block";
    document.getElementById('name').style.display = "block";
    document.getElementById('tabs').style.display = "block";

    fetch(`https://horoscope-astrology.p.rapidapi.com/sign?s=${sign}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6fc065bb99mshe97b4c7cc71d2d4p128b40jsnc8eb0821501f',
            'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
        }

    })
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            globalData = data
            document.getElementById("about").innerHTML = data.about;
            document.getElementById("dates").innerHTML = data.date_range;
            document.getElementById("name").innerHTML = data.name.toUpperCase();

            if (sign == "leo") {
                let photo = document.getElementById('photo');
                photo.src = "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_leo.png";
                photo.style.display = "block";

            } else if (sign == "libra") {
                let photo = document.getElementById('photo');
                photo.src = "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_libra.png";
                photo.style.display = "block";

            } else if (sign == "gemini") {
                let photo = document.getElementById('photo');
                photo.src = "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_gemini.png";
                photo.style.display = "block";

            } else if (sign == "scorpio") {
                let photo = document.getElementById('photo');
                photo.src = "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_scorpio.png";
                photo.style.display = "block";

            } else if (sign == "sagittarius") {
                let photo = document.getElementById('photo');
                photo.src = "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_sagittarius.png";
                photo.style.display = "block";

            } else if (sign == "virgo") {
                let photo = document.getElementById('photo');
                photo.src = "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_virgo.png";
                photo.style.display = "block";

            } else if (sign == "capricorn") {
                let photo = document.getElementById('photo');
                photo.src = "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_capricorn.png";
                photo.style.display = "block";

            } else if (sign == "cancer") {
                let photo = document.getElementById('photo');
                photo.src = "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_cancer.png";
                photo.style.display = "block";

            } else if (sign == "aquarius") {
                let photo = document.getElementById('photo');
                photo.src = "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_aquarius.png";
                photo.style.display = "block";

            } else if (sign == "aries") {
                let photo = document.getElementById('photo');
                photo.src = "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_aries.png";
                photo.style.display = "block";

            } else if (sign == "taurus") {
                let photo = document.getElementById('photo');
                photo.src = "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_taurus.png";
                photo.style.display = "block";

            } else if (sign == "pisces") {
                let photo = document.getElementById('photo');
                photo.src = "https://www.astrologyzone.com/wp-content/themes/JointsWP-master/assets/images/horoscopes/horoscope-article-hero/az_img_horoscope_pisces.png";
                photo.style.display = "block";
            }

        })
        .catch(err => console.error(err));

}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("type-of-button");


console.log(btn);
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn[0].onclick = function () {
    modal.style.display = "block";
    let btn1 = document.getElementById('boxContent')
    btn1.innerHTML = globalData.element;
    btn1.style.fontSize = '100px';
    //i want to use a fetch api for the value of this button.
    // if element is = wind, i want that to run in my other api that will give me a picture
};

btn[1].onclick = function () {
    modal.style.display = "block";
    let btn2 = document.getElementById('boxContent')
    btn2.innerHTML = globalData.ruling_planet;
    btn2.style.fontSize = '100px';

};

btn[2].onclick = function () {
    modal.style.display = "block";
    let btn3 = document.getElementById('boxContent')
    btn3.innerHTML = globalData.symbol;
    btn3.style.fontSize = '100px';
};

btn[3].onclick = function () {
    modal.style.display = "block";
    let btn4 = document.getElementById('boxContent')
    btn4.innerHTML = globalData.strengths;
    btn4.style.fontSize = '40px';
};
btn[4].onclick = function () {
    modal.style.display = "block";
    let btn5 = document.getElementById('boxContent')
    btn5.innerHTML = globalData.weaknesses;
    btn5.style.fontSize = '40px';
};

btn[5].onclick = function () {
    modal.style.display = "block";
    let btn6 = document.getElementById('boxContent')
    btn6.innerHTML = globalData.compatibility;
    btn6.style.fontSize = '40px';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// BASIC CALCULATOR
function calculator(num1, operator, num2) {
    if (num2 === 0) {
        return "Can't divide by 0!"
    }
    if (operator === "+") {
        return num1 + num2
    } else if (operator === "-") {
        return num1 - num2
    } else if (operator === "*") {
        return num1 * num2
    } else if (operator === "/") {
        return num1 / num2
    }
}

//the faster way and cleaner
function calculator(num1, operator, num2) {
    if (operator == '+') return num1 + num2;
    if (operator == '-') return num1 - num2;
    if (operator == '*') return num1 * num2;
    if (operator == '/' && num2 != 0) return num1 / num2;
    else return "Can't divide by 0!";
}