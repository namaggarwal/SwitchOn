from flask import Flask
from flask import request, redirect, url_for
import RPi.GPIO as GPIO ## Import GPIO library

app = Flask(__name__)
GPIO.setmode(GPIO.BOARD) ## Use board pin numbering
GPIO.setup(7, GPIO.OUT) ## Setup GPIO Pin 7 to OUT

@app.route("/")
def home():
	return redirect(url_for("static",filename="html/index.html"))

@app.route("/lights", methods=['POST'])
def lights():

	action = request.form['action']
	if action == 1:		
		GPIO.output(4,True) ## Turn on GPIO pin 4
		return "Action is 1"
	else:
		GPIO.output(4,False) ## Turn on GPIO pin 4
		return "Action is 0"
	

if __name__ == "__main__":
    app.run()