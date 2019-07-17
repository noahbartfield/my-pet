
const bella = {
    name: "Bella",
    species: "dog",
    nicknames: [
        "Bella Boo",
        "Hot Fat",
        "Stink Pot"
    ],
    age: 6,
    sleep: () => {
        window.alert("snooooooorrrrreeeeeeee")
    },
    birthday: function () {
        this.age++
    },
    destroy: (victim) => {
        const sentence = `Oh no! Bella destroyed the ${victim}!!`
        window.alert(sentence.toUpperCase())
    },
    favoriteToys: [],
    play: function (toy) {
        if (toy.squeaky === true || toy.furry === true) {
            this.favoriteToys.push(toy)
        }
    }
}

const bunny = {
    name: "Bunny",
    squeaky: false,
    furry: true,
    size: "small",
    destructability: "high"
}

const golfBall = {
    name: "GolfBall",
    squeaky: false,
    furry: false,
    size: "small",
    destructability: "low"
}

const rubberChicken = {
    name: "Rubber Chicken",
    squeaky: true,
    furry: false,
    size: "medium",
    destructability: "medium"
}

bella.play(rubberChicken)
bella.play(golfBall)
bella.play(bunny)

console.log(bella)

// bella.sleep()
// bella.birthday()
// bella.destroy("Stuffed Elephant")
