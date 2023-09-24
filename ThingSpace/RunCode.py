import RPi.GPIO as GPIO
import thingspeak
import requests
import time

channel_id= 2279943
write_key= 'N0A0ABMUEDDZWPNM'
read_key='Q1J1L84HTQBVUPM5'
pulse_pin = 24 
GPIO.setmode(GPIO.BCM)
GPIO.setup(pulse_pin, GPIO.IN)
def read_pulse_sensor():
    from pulsesensor import Pulsesensor
    p = Pulsesensor()
    p.startAsyncBPM()
    try:
        while True:
            bpm = p.BPM
            if bpm > 0:
                print("BPM: %d" % bpm)
            else:
                continue
            time.sleep(1)
    except:
        p.stopAsyncBPM()
def measure(channel):
    try:
        BPM= read_pulse_sensor()
        response=channel.update({'field3':BPM})
    except:
        print("Connection failed")
        
if __name__=="__main__":
    channel=thingspeak.channel(id=2279943,write_key= write_key,api_key=read_key)
    while True:
        measure(channel)
        time.sleep(15)
