class Persons {

	constructor(img, name, surname, age, likes, gender, inRelation) {
		this.img		= img;
		this.name		= name;
		this.surname	= surname;
		this.age		= age;
		this.likes		= likes;
		this.gender		= gender;
		this.inRelation = inRelation;
	}
}

var daters = [
	new Persons("img/female/female1.jpg", "Ayla", "Hassan", 26, 5, "female", false),
	new Persons("img/male/male1.jpg", "Damir", "Zolota", 26, 7, "male", false),
	new Persons("img/male/male2.jpg", "Hasan", "Ibrahimi", 24, 12, "male", true),
	new Persons("img/female/female2.jpg", "Susanne", "McQueen", 31, 3, "female", true),
	new Persons("img/male/male3.jpg", "Simon", "Johanson", 28, 5, "male", false),
	new Persons("img/female/female3.jpg", "Jessica", "Stalone", 19, 17, "female", true),
	new Persons("img/female/female4.jpg", "Diana", "Avramov", 29, 5, "female", false),
	new Persons("img/male/male4.jpg", "Peter", "O'Raily", 34, 30, "male", true),
	new Persons("img/female/female5.jpg", "Maria", "Fernandes", 33, 12, "female", false),
	new Persons("img/male/male5.jpg", "Sasha", "Bosh", 26, 13, "male", false),
	new Persons("img/female/female6.jpg", "Kelly", "Williams", 27, 17, "female", true),
	new Persons("img/male/male6.jpg", "Johanes", "Kaltenberg", 41, 7, "male", false),
	new Persons("img/male/male7.jpg", "William", "Grey", 26, 1, "male", false),
	new Persons("img/female/female7.jpg", "Lee", "Ching", 23, 31, "female", true),
	new Persons("img/male/male8.jpg", "Donald", "Trump", 56, 22, "male", false),
	new Persons("img/female/female8.jpg", "Martina", "Dedic", 33, 4, "female", false),
	new Persons("img/female/female9.jpg", "Sarah", "Hudson", 30, 6, "female", true),
	new Persons("img/male/male9.jpg", "Frank", "Bortollotti", 25, 19, "male", false),
	new Persons("img/female/female10.jpg", "Nataly", "Papo", 29, 37, "female", true),
	new Persons("img/male/male10.jpg", "Mahal", "Gandhi", 26, 16, "male", true),
];

// function showAll() {
//   var all = document.getElementById("all");
//   for (var i = 0; i < daters.length; i++) {
//     all.innerHTML += `
// 		<div class="col-xs-12 col-sm-6 col-md-3"
// 		  <img class="center-block" src='${this.image}'>
// 			<div class="info-block">
// 			<p>${this.name}</p>
// 			<p>${this.surname}</p>
// 			<p>${this.age}</p>
// 			<button type="button" class="btn">Like </button> ${this.likes} <i class="fa fa-heart" aria-hidden="true"></i>
// 			</div>
// 		</div>
// 		`;	
//   }
// }

function showAll() {
    let all 	= document.getElementById("all");

    for (let i = 0; i < daters.length; i++) {
      all.innerHTML += '<div class="col-xs-12 col-sm-6 col-md-3 form-group"' +
  		  				'<p><img src="' + daters[i].img + '" class="center-block"></p>' +
  						'<div class="info-block">' +
 						'<h3>' + daters[i].name + ' ' + daters[i].surname + '</h3>' +
  						'<h3>' + daters[i].age + '</h3>' +
  						'<button type="button" class="btn">Like </button> ' + daters[i].likes +
  						' <i class="fa fa-heart" aria-hidden="true"></i> ' +
  						'</div></div>';	
    }
}

function showLadies() {
  	let female  = document.getElementById("female");

  	for (let i = 0; i < daters.length; i++) {
		if (daters[i].inRelation == true) {
			daters[i].inRelation = 'In a Relationship'
		} else {
			daters[i].inRelation = 'Single'
		}
	};

  	for (let i = 0; i < daters.length; i++) {
    	if (daters[i].gender == "female") {
      		female.innerHTML += '<div class="col-xs-12 col-sm-6 col-md-3 form-group"' +
  		  				'<p><img src="' + daters[i].img + '" class="center-block"></p>' +
  						'<div class="info-block">' +
 						'<h3>' + daters[i].name + ' ' + daters[i].surname + '</h3>' +
  						'<h3>' + daters[i].age + '</h3>' +
  						'<h3>' + daters[i].inRelation + '</h3>' +
  						'<button type="button" class="btn">Like </button> ' + daters[i].likes + 
  						' <i class="fa fa-heart" aria-hidden="true"></i> ' +
  						'</div></div>';
    	}
  	}
}

function showGentelmen() {
  	let male = document.getElementById("male");

  	for (let i = 0; i < daters.length; i++) {
		if (daters[i].inRelation == true) {
			daters[i].inRelation = 'In a Relationship'
		} else {
			daters[i].inRelation = 'Single'
		}
	};

  	for (let i = 0; i < daters.length; i++) {
    	if (daters[i].gender == "male") {
      		male.innerHTML += '<div class="col-xs-12 col-sm-6 col-md-3 form-group"' +
  		  				'<p><img src="' + daters[i].img + '" class="center-block"></p>' +
  						'<div class="info-block">' +
 						'<h3>' + daters[i].name + ' ' + daters[i].surname +'</h3>' +
  						'<h3>' + daters[i].age + '</h3>' +
  						'<h3>' + daters[i].inRelation + '</h3>' +
  						'<button type="button" class="btn" id="clicks">Like </button><span id="count"> ' + daters[i].likes + 
  						' </span><i class="fa fa-heart" aria-hidden="true"></i> ' +
  						'</div></div>';
    	}
  	}
}
