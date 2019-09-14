from flask import Flask, render_template
# from backend.models import db

app = Flask(__name__, static_folder="../dist/static", template_folder="../dist")
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///gotgam.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# db.init_app(app)

@app.route('/')
def index():
    return render_template("index.html")

if __name__ == '__main__':
    app.run()
