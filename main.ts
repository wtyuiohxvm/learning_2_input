input.onGesture(Gesture.TiltLeft, function () {
    basic.showString("left")
})
// 
input.onButtonPressed(Button.A, function () {
    count += 1
    basic.showNumber(count)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("zd")
})
input.onButtonPressed(Button.B, function () {
    dice = randint(1, 6)
    basic.showNumber(dice)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Diamond)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showString("right")
})
let test1 = false
let dice = 0
let count = 0
basic.showNumber(count)
basic.forever(function () {
    test1 = input.buttonIsPressed(Button.A)
    if (test1) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
