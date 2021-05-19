#A very simple flask server to run this WWT navigator
# currently the calls to WWT are executed within javascript.  I get CORS errors, but it still appears to work.
# I could run the WWT calls from here if the javascript calls ever stop working.

from flask import Flask, render_template
import json

#get the server info.  Note: this is not on GitHub.
with open ('static/data/private/serverInfo.json') as f:
	data = json.load(f)
host = data['host']
port = data['port']

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret! the quick brown fox jumps over the lazy DOG'


#flask stuff
@app.route('/Rover')
def index():  
	return render_template('index.html')


if __name__ == '__main__':
	print('Starting server...')

	app.run(host=host, port=port)





