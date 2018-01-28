class Persons {

	constructor(img, name, surname, age, gender, inRelation, like) {
		this.img		= img;
		this.name		= name;
		this.surname	= surname;
		this.age		= age;
		this.gender		= gender;
		this.inRelation = inRelation;
		this.like		= 0;
	}

	render(i) {

		let msg ='';
		msg += `
		<div class="col-xs-12 col-sm-6 col-lg-3 form-group"
		  <p><img src=' ${this.img} ' class="center-block"></p>
			<div class="info-block">
			<h3> ${this.name} ${this.surname}</h3>
			<h3> ${this.age} </h3>
			<h4> ${this.gender} </h4>
			<h4> ${this.inRelation} </h4>
			<button type="button" class="btn btn-default" onclick="like(`+ i +`)">Like</button>
			<span id="like`+ i +`"> ${this.like} </span><i class="fa fa-heart" aria-hidden="true"></i>
			</div>
		</div>
		`;
		return msg;
	}
}

//function for the like button
function like(index) {
  daters[index].like = daters[index].like + 1;

  document.getElementById('like' + index).innerHTML = daters[index].like;
}


//function for all daters that are outputed on homepage
function showAll() {
    let all 	= document.getElementById("all");

    for (let i = 0; i < daters.length; i++) {
		if (daters[i].inRelation == true) {
				daters[i].inRelation = 'In a Relationship'
		} else {
				daters[i].inRelation = 'Single'
		}
				all.innerHTML += daters[i].render(i);
  }
}


//function for all Females that are outputed on female page
function showLadies() {
    let female 	= document.getElementById("female");

    for (let i = 0; i < daters.length; i++) {
		if (daters[i].inRelation == true) {
				daters[i].inRelation = 'In a Relationship'
		} else {
				daters[i].inRelation = 'Single'
		}

		if (daters[i].gender == "Female")
				female.innerHTML += daters[i].render(i);
  }
}


//function for all Males that are outputed on male page
function showGentelmen() {
    let male 	= document.getElementById("male");

    for (let i = 0; i < daters.length; i++) {
		if (daters[i].inRelation == true) {
				daters[i].inRelation = 'In a Relationship'
		} else {
				daters[i].inRelation = 'Single'
		}

		if (daters[i].gender == "Male")
				male.innerHTML += daters[i].render(i);
  }
}


var daters = [
	new Persons("img/female/female1.jpg", "Ayla", "Hassan", 26, "Female", false),
	new Persons("img/male/male1.jpg", "Damir", "Zolota", 26, "Male", false),
	new Persons("img/male/male2.jpg", "Hasan", "Ibrahimi", 24, "Male", true),
	new Persons("img/female/female2.jpg", "Susanne", "McQueen", 31, "Female", true),
	new Persons("img/male/male3.jpg", "Simon", "Johanson", 28, "Male", false),
	new Persons("img/female/female3.jpg", "Jessica", "Stalone", 19, "Female", true),
	new Persons("img/female/female4.jpg", "Diana", "Avramov", 29, "Female", false),
	new Persons("img/male/male4.jpg", "Peter", "O'Raily", 34, "Male", true),
	new Persons("img/female/female5.jpg", "Maria", "Fernandes", 33, "Female", false),
	new Persons("img/male/male5.jpg", "Sasha", "Bosh", 26, "Male", false),
	new Persons("img/female/female6.jpg", "Kelly", "Williams", 27, "Female", true),
	new Persons("img/male/male6.jpg", "Johanes", "Kaltenberg", 41, "Male", false),
	new Persons("img/male/male7.jpg", "William", "Grey", 26, "Male", false),
	new Persons("img/female/female7.jpg", "Lee", "Ching", 23, "Female", true),
	new Persons("img/male/male8.jpg", "Donald", "Trump", 56, "Male", false),
	new Persons("img/female/female8.jpg", "Martina", "Dedic", 33, "Female", false),
	new Persons("img/female/female9.jpg", "Sarah", "Hudson", 30, "Female", true),
	new Persons("img/male/male9.jpg", "Frank", "Bortollotti", 25, "Male", false),
	new Persons("img/female/female10.jpg", "Nataly", "Papo", 29, "Female", true),
	new Persons("img/male/male10.jpg", "Mahal", "Gandhi", 26, "Male", true)
];
