hummingbird.start_hummingbird()
hummingbird.set_tri_led(TwoPort.ONE, 60, 50, 0)
hummingbird.set_tri_led(TwoPort.TWO, 60, 50, 0)

def on_forever():
    if hummingbird.get_sensor(SensorType.DISTANCE, ThreePort.ONE) <= 5:
        for index in range(5):
            hummingbird.set_position_servo(FourPort.ONE, 180)
            basic.pause(1000)
            hummingbird.set_position_servo(FourPort.ONE, 0)
    elif False:
        pass
basic.forever(on_forever)
