input.onGesture(Gesture.TiltLeft, function () {
    basic.showString("left")
})
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
input.onGesture(Gesture.TiltRight, function () {
    basic.showString("right")
})
let dice = 0
let count = 0
basic.showNumber(count)
