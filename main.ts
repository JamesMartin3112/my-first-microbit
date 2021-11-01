let start = 0
let started = false
let elapsed = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
    started = true
    basic.showIcon(IconNames.Chessboard)
})
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - start
    started = false
    basic.showNumber(Math.idiv(elapsed, 1000))
    basic.showString(".")
    basic.showNumber(elapsed % 100)
})
input.onGesture(Gesture.Shake, function () {
	
})
basic.forever(function () {
    if (started) {
        led.toggle(2, 2)
        basic.pause(480)
    }
})
