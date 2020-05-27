import flask
from flask import request, make_response
from flask_cors import CORS, cross_origin
from app.generator import graph

app = flask.Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/', methods=['POST'])
@cross_origin()
def home():
    content = request.get_json()
    charges = []
    for charge in content['charges']:
        charges.append((charge.get('q'), (charge.get('x'), charge.get('y'))))
    response = make_response(graph(charges))
    response.mimetype = 'image/png'
    return response
