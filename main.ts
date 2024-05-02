let Knuffel = 0
let Voeding = 0
let Dood = 0
basic.forever(function () {
    if ((Knuffel && Voeding) > 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
basic.forever(function () {
    Dood = 0
    Knuffel = 20
    Voeding = 20
})
basic.forever(function () {
    if ((Knuffel && Voeding) < 10 && (Knuffel && Voeding) > 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Voeding += 5
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        Knuffel += 5
    }
})
basic.forever(function () {
    if ((Knuffel && Voeding) < 0) {
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
    if (!(input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B))) {
        Knuffel += -1
        Voeding += -1
    }
})
