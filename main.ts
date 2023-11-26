function RnadomImage () {
    Image2 = randint(0, 10)
    if (Image2 == 0) {
        basic.showIcon(IconNames.Happy)
    } else if (Image2 == 1) {
        basic.showIcon(IconNames.Asleep)
    } else if (Image2 == 2) {
        basic.showIcon(IconNames.Rollerskate)
    } else if (Image2 == 3) {
        basic.showIcon(IconNames.StickFigure)
    } else if (Image2 == 4) {
        basic.showIcon(IconNames.Heart)
    } else if (Image2 == 5) {
        basic.showIcon(IconNames.Giraffe)
    } else if (Image2 == 6) {
        basic.showIcon(IconNames.Umbrella)
    } else {
        basic.showIcon(IconNames.Snake)
    }
}
function servoRobotForward (menu: number) {
    if (0 == menu) {
        pins.servoWritePin(AnalogPin.P1, 0)
        pins.servoWritePin(AnalogPin.P2, 180)
    } else if (1 == menu) {
        pins.servoWritePin(AnalogPin.P1, 0)
    } else if (2 == menu) {
        pins.servoWritePin(AnalogPin.P2, 180)
    }
}
function stopMotors () {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
}
input.onButtonPressed(Button.A, function () {
    servoRobotForward(menu)
})
function Animace () {
    basic.showIcon(IconNames.Chessboard)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    RnadomImage()
}
input.onButtonPressed(Button.AB, function () {
    menu += 1
    stopMotors()
})
input.onButtonPressed(Button.B, function () {
    servoRobotBackward(menu)
})
function servoRobotBackward (menu: number) {
    if (0 == menu) {
        pins.servoWritePin(AnalogPin.P1, 180)
        pins.servoWritePin(AnalogPin.P2, 0)
    } else if (1 == menu) {
        pins.servoWritePin(AnalogPin.P1, 180)
    } else if (2 == menu) {
        pins.servoWritePin(AnalogPin.P2, 0)
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    menu += 1
    stopMotors()
})
let menu = 0
let Image2 = 0
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.easeBrightness()
strip.showRainbow(1, 360)
Image2 = 0
menu = 0
Animace()
basic.pause(2000)
strip.clear()
strip.show()
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
basic.forever(function () {
    if (0 == menu) {
        basic.showIcon(IconNames.Ghost)
    } else if (1 == menu) {
        basic.showNumber(menu)
    } else if (2 == menu) {
        basic.showNumber(menu)
    } else {
        menu = 0
    }
})
