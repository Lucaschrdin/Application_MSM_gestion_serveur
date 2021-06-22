from datetime import date
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)

app.config['SQLALCHEMY_DATZBASE_URI'] = 'mysql://root:''@localhost:5000/flask'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Member(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    Username = db.Column(db.String(20))
    Password = db.Column(db.String(50))
    # Date =  db.Column(db.Integer, default = )

    def __init__(self, Username, Password):
        self.Username = Username
        self.Password = Password 

class MemberSchema(ma.Schema):
    class Meta:
        fields = ('id', 'Username', 'Password')

Membre_schema = MemberSchema()


@app.route('/get', methods = ['GET'])
def get_Members():
    pass


app.run(host='0.0.0.0', port = 5000, debug=True)