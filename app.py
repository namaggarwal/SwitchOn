from flask import Flask
from flask import request, redirect, url_for

app = Flask(__name__)

@app.route("/")
def home():
	return redirect(url_for("static",filename="html/index.html"))

@app.route("/lights", methods=['POST'])
def lights():

	action = request.form['action']
	if action == 1:
		return "Action is 1"
	else:
		return "Action is 0"
	

if __name__ == "__main__":
    app.run()