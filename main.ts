input.onButtonPressed(Button.A, function () {
    if (Dood == 0) {
        Voeding += 5
    }
})
input.onButtonPressed(Button.B, function () {
    if (Dood == 0) {
        Knuffel += 5
    }
})
let Dood = 0
Dood = 0
let Knuffel = 20
let Voeding = 20
basic.forever(function () {
    if (Knuffel > 10 && Voeding > 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (Knuffel < 10 && Knuffel > 1 && (Voeding < 10 && Voeding > 1)) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
    if (Knuffel < 1 || Voeding < 1) {
        Dood = 1
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
basic.forever(function () {
    Knuffel += -1
    Voeding += -1
    basic.pause(1000)
})
